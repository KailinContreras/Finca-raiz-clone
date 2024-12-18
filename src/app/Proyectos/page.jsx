'use client';
import Date from '@/components/Date';
import Header from '@/components/Header';
import Nav from '@/components/Nav'
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