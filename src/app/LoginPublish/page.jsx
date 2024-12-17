import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#f2f6fd]'>
        <Image className='w-[360px] h-auto' src={'/image/login.png'} width={300} height={300} alt='login'/>
        <p className='text-[#082645] mt-6 text-base font-black font-[mulishmedium]'>Debes iniciar sesión para continuar</p>
        <Link href="">
          <button className='mt-6 border border-[#9eaec7] text-[#456787] text-xs w-[112px] h-9 font-bold rounded-md py-[10px] px-3'>Iniciar sesión</button>
        </Link>
    </div>
  )
}

export default page