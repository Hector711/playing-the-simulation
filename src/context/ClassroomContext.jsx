import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getClasses } from '@/api/classesApi';

const ClassroomContext = createContext();

export const useClassroom = () => {
  const context = useContext(ClassroomContext);
  if (!context) {
    throw new Error('useClassroom must be used within a ClassroomProvider');
  }
  return context;
};

export function ClassroomProvider({ children }) {
  const {
    isLoading,
    data: classes,
    isError,
    error,
  } = useQuery({
    queryKey: ['classes'],
    queryFn: getClasses,
  });
  return (
    <ClassroomContext.Provider value={{ isLoading, classes, isError, error }}>
      {children}
    </ClassroomContext.Provider>
  );
}
