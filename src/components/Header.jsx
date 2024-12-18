"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/Firebase/Firebase';
import { FaUserCircle } from 'react-icons/fa';
import SingUpPopup from './SingUpPopup';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Verificar el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handlePublicar = () => {
    if (user) {
      router.push('/SubmitHouse');
    } else {
      router.push('/LoginPublish');
    }
  };

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className='w-full h-16 bg-[#ffffff] flex items-center border-b px-4 border-[#e9e9e9] gap-[10px] fixed z-20'>
      <Image className='max-w-full max-h-full w-[135px]' width={150} height={150} src={'/image/logofr.png'} alt='logofr' />
      <nav className='flex flex-nowrap w-[1060px] h-10'>
        <Link href="/Proyectos">
          <button className='hover:bg-[#077be7] rounded-lg'>
            <p className='font-bold pb-2 hover:text-[#ffffff] pt-2 pr-3 pl-3 text-base text-[#082645]'>Proyectos</p>
          </button>
        </Link>
        <button className='hover:bg-[#077be7] rounded-lg'>
          <p className='font-bold pb-2 hover:text-[#ffffff] pt-2 pr-3 pl-3 text-base text-[#082645]'>Venta</p>
        </button>
        <button className='hover:bg-[#077be7] rounded-lg'>
          <p className='font-bold pb-2 hover:text-[#ffffff] pt-2 pr-3 pl-3 text-base text-[#082645]'>Arriendo</p>
        </button>
        <Link href="https://blog.fincaraiz.com.co/">
          <button className='hover:bg-[#077be7] rounded-lg'>
            <p className='font-bold pb-2 hover:text-[#ffffff] pt-2 pr-3 pl-3 text-base text-[#082645]'>Noticias</p>
          </button>
        </Link>
      </nav>

      <div className='userbox w-auto h-auto flex items-center gap-4'>
        {user ? (
          <div className="relative items-center flex flex-col pr-28 justify-center">
            <FaUserCircle className="w-8 h-8 text-[#082645] absolute left-16 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}/>
            {menuOpen && (
              <div className="absolute right-0 top-4 mt-2 w-[150px] bg-white border border-gray-200 rounded-lg shadow-lg">
                <button onClick={handleLogout} className="w-full text-center px-4 py-2 text-[#082645] hover:bg-gray-200 hover:rounded-lg"> Cerrar sesión </button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={handleOpenPopup} className='flex justify-center px-6 min-h-12 items-center gap-2 rounded-md border-solid border border-[#6a859f]'>
            <Image className='w-4 h-4' width={100} height={100} src={'/image/iconsenter.png'} alt='iconsenter' />
            <p className='text-sm h-full hover:text-[#686f7e] text-[#082645] font-semibold'>Ingresar</p>
          </button>
        )}
        <button onClick={handlePublicar} className='px-6 h-12 w-[150px] bg-[#f9da88] rounded-md border border-[#f9da88] text-center'>
          <p className='text-sm text-[#082645] font-semibold'>Publica GRATIS</p>
        </button>
      </div>
      {popupOpen && <SingUpPopup onClose={handleClosePopup} />}
    </header>
  );
};

export default Header;
