import React from 'react';
import NewPost from '@/components/NewPost';
import Timeline from '@/components/Timeline';
import ModelMain from '../layouts/ModelMain';
import Cookies from 'js-cookie';
// import { verifyTokenRequest } from '../api/auth';
import { useAuth } from '@/context/AuthContext';

export default function HomePage() {
  const { user } = useAuth();
  console.log("Cookies User", Cookies.get("user"));
  return (
    <>
      <ModelMain id='timeline'>
        <NewPost />
        <hr className='home' />
        <Timeline />
      </ModelMain>
    </>
  );
}
