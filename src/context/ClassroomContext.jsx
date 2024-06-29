import { createContext, useContext, useState } from 'react';
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
  const [roadClasses, setRoadClasses] = useState([])
  const {
    isLoading,
    data: classes,
    isError,
    error,
  } = useQuery({
    queryKey: ['classes'],
    queryFn: getClasses,
  });
  
  function getRoadClasses() {
    const roadClasses = classes?.roadto100k;
    setRoadClasses(roadClasses);
  }

  return (
    <ClassroomContext.Provider value={{ isLoading, getRoadClasses, isError, error }}>
      {children}
    </ClassroomContext.Provider>
  );
}
