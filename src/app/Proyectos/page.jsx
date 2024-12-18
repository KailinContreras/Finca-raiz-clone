'use client';
import Date from '@/app/components/Date';
import Header from '@/app/components/Header';
import Nav from '@/app/components/Nav'
import React from 'react';

const page = () => {
  return (
    <div className='w-full h-screen'>
      <Header />
      <Nav />
      <Date />
    </div>
  )
}

export default page