'use client';
import Header from '@/Components/Header'
import SearchSection from '@/Components/SearchSection'
import React, { useState } from 'react'


const page = () => {
  return (
    <div className='w-full h-screen bg-[#fafafa]'>
        <Header/>
        <SearchSection/>
    </div>
  )
}

export default page
