import { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/api/usersAPI';

const MembersContext = createContext();

export const useMembers = () => {
  const context = useContext(MembersContext);
  if (!context) {
    throw new Error('usePlanning must be used within a MembersProvider');
  }
  return context;
};

export function MembersProvider({ children }) {
  const [selectFilter, setSelectFilter] = useState('speciality');
  const [filter, setFilter] = useState();
  const [show, setShow] = useState([]);
  const {
    isLoading,
    data: users,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  const onSelectFilter = e => {
    const selectValue = e.value;
    setSelectFilter(selectValue);
  };
  function allUsers() {
    const alphaOrderedUsers = users.sort((a, b) =>
      a.fullName.localeCompare(b.fullName),
    );
    console.log(alphaOrderedUsers);
    return setShow(alphaOrderedUsers);
  }
  const onFilterByLevel = value => {
    setFilter(value);
    const levelFilteredUsers = users.filter(user => user.level === value);
    return setShow(levelFilteredUsers);
  };
  const onFilterBySector = value => {
    setFilter(value);
    const areaFilteredUsers = users.filter(user => user.area === value);
    return setShow(areaFilteredUsers);
  };
  return (
    <MembersContext.Provider
      value={{
        selectFilter,
        onSelectFilter,
        isLoading,
        isError,
        error,
        onFilterByLevel,
        onFilterBySector,
        filter,
        allUsers,
        show,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
}
