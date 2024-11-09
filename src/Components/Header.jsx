'use client';
import PopupIngresar from '@/Components/PopupIngresar'
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {
    const [isPopupIngresar, setIsPopupIngresar] = useState(false);
  
    const openPopup = () => {
     setIsPopupIngresar(true);
    };

    const closePopup = () => {
     setIsPopupIngresar(false);
    };
  return (
    <header className='w-full h-16 bg-[#fafafa] flex items-center border-b px-4 border-[#e9e9e9] gap-[10px]'>
            <Image className='max-w-full max-h-full w-[135px]' width={150} height={150} src={'/image/logofr.png'} alt='logofr' />
          <nav className='flex flex-nowrap w-[1060px] h-10'>
            <button className='hover:bg-[#077be7] rounded-lg'>
              <p className='font-bold pb-2 hover:text-[#ffffff] pt-2 pr-3 pl-3 text-base text-[#082645]'>Proyectos</p>
            </button>
            <button className='hover:bg-[#077be7] rounded-lg'>
              <p className='font-bold pb-2 hover:text-[#ffffff] pt-2 pr-3 pl-3 text-base text-[#082645]'>Venta</p>
            </button>
            <button className='hover:bg-[#077be7] rounded-lg'>
              <p className='font-bold pb-2 hover:text-[#ffffff] pt-2 pr-3 pl-3 text-base text-[#082645]'>Arriendo</p>
            </button>
            <button className='hover:bg-[#077be7] rounded-lg'>
              <p className='font-bold pb-2 hover:text-[#ffffff] pt-2 pr-3 pl-3 text-base text-[#082645]'>Noticias</p>
            </button>
          </nav>
          <div className='userbox w-auto h-auto flex gap-[6px] items-center'>
            <button onClick={openPopup} className='flex justify-center px-6 min-h-12 items-center gap-2 rounded-md border-solid border border-[#6a859f]'>
              <Image className='w-4 h-4' width={100} height={100} src={'/image/iconsenter.png'} alt='iconsenter'/>
              <p className='text-sm h-full hover:text-[#404653] text-[#082645] font-semibold'>Ingresar</p>
            </button>
            {isPopupIngresar && <PopupIngresar onClose={closePopup} />}
            <a href="" className='flex justify-center px-6 min-h-12 items-center bg-[#f9da88] rounded-md border border-[#f9da88] text-center'>
              <p className='text-sm h-full text-[#082645] font-semibold'>Publica GRATIS</p>
            </a>
          </div>
    </header>
  )
}

export default Header