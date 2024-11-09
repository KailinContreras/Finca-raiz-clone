import Image from 'next/image'
import React, { useState } from 'react'

const SearchSection = () => {
  // esto en un estado para controlar el botón seleccionado
  const [selectedButton, setSelectedButton] = useState(null);

  // esto es una función para manejar el clic en un botón
  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className='px-4 w-full h-[68%]'>
        <div className='fondo w-full h-full'>
            <div className='fondotrans w-full h-full flex flex-col items-center justify-center'>
              <p className='titulo font-black text-[46px] text-[#fff] mb-10'>Lo mejor de buscar es encontrar</p>
              <div className=' w-[40%] h-auto mb-1 flex flex-col justify-center items-center'>
                <div className='flex bg-[#0000007f] w-[90%] mx-6 h-10 rounded-md'>
                  <button className={`flex text-center text-base hover:text-[#077be7] hover:font-semibold text-[#e9e9e8] font-semibold justify-center items-center w-1/2 h-auto rounded-md ${selectedButton === 'venta' ? 'bg-white text-[#077be7]' : 'hover:bg-[#fff]'}`} onClick={() => handleClick('venta')}>Venta</button>
                  <button className={`flex text-center text-base hover:text-[#077be7] hover:font-semibold text-[#e9e9e8] font-semibold justify-center items-center w-1/2 h-auto rounded-md ${selectedButton === 'arriendo' ? 'bg-white text-[#077be7]' : 'hover:bg-[#fff]'}`} onClick={() => handleClick('arriendo')}>Arriendo</button>
                </div>
                <div className='flex h-[70px] w-full pt-2 pb-1'>
                  <select className='rounded-l-lg w-[26%] h-full border-r border-[#d8d8d8] pl-2 pr-6' name="" id="">
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Apartaestudio">Apartaestudio</option>
                    <option value="Cabaña">Cabaña</option>
                    <option value="Casa Campestre">Casa Campestre</option>
                  </select>
                  <input className='w-[64%]' type="text" />
                  <button className='w-[10%] bg-[#f9da88] rounded-e-lg flex justify-center items-center'>
                    <Image className='w-6 h-6' src={'/image/iconsearch.png'} width={100} height={100} alt='Seacrh'/>
                  </button>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SearchSection