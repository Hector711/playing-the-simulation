import { createContext, useContext, useState } from 'react';

const PlanningContext = createContext();

export const usePlanning = () => {
  const context = useContext(PlanningContext);
  if (!context) {
    throw new Error('usePlanning must be used within a PlanningProvider');
  }
  return context;
};

export function PlanningProvider({ children }) {
  const [monthToShow, setMonthToShow] = useState('JUL');

  return (
    <PlanningContext.Provider value={{ monthToShow, setMonthToShow }}>
      {children}
    </PlanningContext.Provider>
  );
}
