import React from 'react';
import NewPost from '@/components/NewPost';
import Timeline from '@/components/Timeline';
import ModelMain from '../layouts/ModelMain';

export default function Home() {
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
