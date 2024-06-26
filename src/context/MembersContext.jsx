import { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/api/usersAPI';
import { useEffect } from 'react';

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
  const onChangeSelectFilter = e => {
    const selectValue = e.value;
    setSelectFilter(selectValue);
  };
  const onChangeLevelFilter = (value) => {  
    console.log(value);
    setFilter(value);
    levelFilterUsers(value)
  }
  const onChangeSpecialityFilter = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
  }
  
  function allUsers () {
    const alphaOrderedUsers = users.sort((a, b) => a.fullName.localeCompare(b.fullName));
    console.log(alphaOrderedUsers);
    return alphaOrderedUsers;
  }

  function levelFilterUsers (value) {
    const levelFilteredUsers = users.filter(user => user.level === value);
    console.log("value: ",value)
    console.log("show: ",show)
    return setShow(levelFilteredUsers);
  }
  function specialityFilterUsers () {
    
  }


  return (
    <MembersContext.Provider value={{ selectFilter, onChangeSelectFilter, isLoading, isError, error, onChangeLevelFilter, onChangeSpecialityFilter, filter, allUsers, show }}>
      {children}
    </MembersContext.Provider>
  );
}
