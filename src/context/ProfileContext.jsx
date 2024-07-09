import { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const ProfileContext = createContext();

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('usePlanning must be used within a ProfileProvider');
  }
  return context;
};

export function ProfileProvider({ children }) {
  const [state, setState] = useState({
    addPopUp: false,
    calendlyPopUp: false,
  });
  const onAddPopUp = () => {
    setState({
      ...state,
      addPopUp: true,
    });
  };
  const onCalendlyPopUp = () => {
    setState({
      ...state,
      addPopUp: false,
      calendlyPopUp: true,
    });
  };
  const onCloseAll = () => {
    setState({
      addPopUp: false,
      calendlyPopUp: false,
    });
  };
  return (
    <ProfileContext.Provider
      value={{ state, setState, onAddPopUp, onCalendlyPopUp, onCloseAll}}
    >
      {children}
    </ProfileContext.Provider>
  );
}
