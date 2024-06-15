import React from 'react';
import NewPost from '@/components/NewPost';
import Timeline from '@/components/Timeline';
import AsideRight from '@/components/AsideRight';
import ModelMain from '../layouts/ModelMain';

export default function Home() {
  return (
    <>
      <ModelMain>
        <NewPost />
        <hr className='home' />
        <Timeline />
      </ModelMain>
      <AsideRight />
    </>
  );
}
