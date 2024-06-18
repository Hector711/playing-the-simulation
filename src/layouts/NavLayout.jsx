import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

export default function NavLayout() {
  return (
    <>
      <Navbar />
      <div id='layout'>
        <Outlet />
      </div>
    </>
  );
}
