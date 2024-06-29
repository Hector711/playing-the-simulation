import React from 'react';
import { Outlet } from 'react-router-dom';
import News from '@/components/News';

export default function RightHomeLayout() {
  return (
    <>
      <Outlet />
      <News />
    </>
  );
}
