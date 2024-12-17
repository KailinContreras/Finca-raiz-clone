'use client';
import Date from '@/Components/Date';
import Header from '@/Components/Header';
import Nav from '@/Components/Nav'
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