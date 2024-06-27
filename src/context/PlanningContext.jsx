import { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTasks } from '@/api/tasksApi';

const PlanningContext = createContext();

export const usePlanning = () => {
  const context = useContext(PlanningContext);
  if (!context) {
    throw new Error('usePlanning must be used within a PlanningProvider');
  }
  return context;
};

export function PlanningProvider({ children }) {
  const [monthToShow, setMonthToShow] = useState('JUN');
  const [monthTasks, setMonthTasks] = useState([]);
  const [monthBail, setMonthBail] = useState([]);
  const {
    isLoading,
    data: tasks,
    isError,
    error,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  function getMonthObject(user, month) {
    if (isLoading) {
      return 'Loading...';
    } else if (isError) {
      return `Error: ${error.message}`;
    } else if (tasks) {
      const userTasks = tasks.find(task => task.user === user);
      if (userTasks) {
        const monthObject = userTasks.months.find(
          months => months.month === month,
        );
        if (monthObject) {
          return monthObject;
        } else {
          console.log(`El objeto del mes de ${month}} esta vacío.`);
          return {};
        }
      } else {
        console.log(`No se encontró el usuario ${user}`);
        return {};
      }
    } else {
      console.log('No se encontraron tareas.');
      return {};
    }
  }

  function getMonthTasks(user, month) {
    const monthObject = getMonthObject(user, month);
    return setMonthTasks(monthObject.tasks);
  }
  function getMonthBail(user, month) {
    const monthObject = getMonthObject(user, month);
    return setMonthBail(monthObject.bail);
  }

  function convertMonthName(month) {
    switch (month) {
      case 'ENE':
        return 'enero';
      case 'FEB':
        return 'febrero';
      case 'MAR':
        return 'marzo';
      case 'ABR':
        return 'abril';
      case 'MAY':
        return 'mayo';
      case 'JUN':
        return 'junio';
      case 'JUL':
        return 'julio';
      case 'AGO':
        return 'agosto';
      case 'SEP':
        return 'septiembre';
      case 'OCT':
        return 'octubre';
      case 'NOV':
        return 'noviembre';
      case 'DIC':
        return 'diciembre';
      default:
        return '';
    }
  }

  return (
    <PlanningContext.Provider
      value={{
        monthToShow,
        monthBail,
        setMonthToShow,
        getMonthTasks,
        monthTasks,
        convertMonthName,
        getMonthBail,
      }}
    >
      {children}
    </PlanningContext.Provider>
  );
}
