import React from 'react';
import { Outlet } from 'react-router-dom';

import AsideProfile from '@/components/AsideProfile';

export default function LeftHomeLayout() {
  return (
    <>
      <AsideProfile />
      <Outlet />
    </>
  );
};
