import { createContext, useContext, useState } from 'react';
import { supabase } from '@/api/supabase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const signInWithPassword = async form => {
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword(
        {
          email: form.email,
          password: form.password,
        },
      );
      if (signInError) {
        throw signInError;
      }
      return data;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error; // Cambio aquí: Re-lanzar el error
    }
  };
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{ setForm, signInWithPassword, form, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
