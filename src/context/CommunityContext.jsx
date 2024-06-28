import {createContext, useContext, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getLevels} from '@/api/levelsApi';

const CommunityContext = createContext();

export const useCommunity = () => {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error('useCommunity must be used within a CommunityProvider');
  }
  return context;
}

export function CommunityProvider({children}) {
  const { isloading: isLoadingLevels, data: levels, isError: isErrorLevels, error: errorLevels } = useQuery({
    queryKey: ['levels'],
    queryFn: getLevels,
  });
  const [page, setPage] = useState('Introducción');

  function onChangePage(value) {
    return setPage(value);
  }

  return (
    <CommunityContext.Provider value={{isLoadingLevels, levels, isErrorLevels, errorLevels, page, onChangePage }}>
      {children}
    </CommunityContext.Provider>
  )
}