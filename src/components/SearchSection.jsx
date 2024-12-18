import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from 'react-icons/sl';
import { HiSearch } from "react-icons/hi";

const SearchSection = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showTipoInmueble, setShowTipoInmueble] = useState(false);
  const [showNewDiv, setShowNewDiv] = useState(false);
  const [query, setQuery] = useState('');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (option) => {
    setSelectedOption(option); // Establece el valor seleccionado
    setShowTipoInmueble(false); // Cierra el dropdown
  };

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === '') {
      setLocations([]);
      return;
    }
    
    setLoading(false);
    
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?`, {
        params: {
          key: '542aa94ab3f74e2fb06217c7411ad41e',
          q: e.target.value,
          countrycode: 'co',
          language: 'es'
        }
      });

      setLocations(response.data.results);
    } catch (error) {
      
    } finally {
      setLoading(true);
    }
  };

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const handleClickk = () => {
    setShowTipoInmueble(!showTipoInmueble);
    setShowNewDiv(!showNewDiv);
  };

  return (
    <div className='px-4 w-full h-[77%] bg-[#fafafa]'>
      <div className='fondo w-full h-full'>
        <div className='fondotrans w-full h-full flex flex-col items-center justify-center'>
          <p className='titulo font-black text-[46px] text-[#fff] mb-10'>Lo mejor de buscar es encontrar</p>
          <div className=' w-[40%] h-auto mb-1 flex flex-col justify-center items-center'>
            <div className='flex bg-[#0000007f] w-[90%] mx-6 h-10 rounded-md'>
              <button className={`flex text-center text-base hover:font-semibold text-[#e9e9e8] font-semibold justify-center items-center w-1/2 h-auto rounded-md ${selectedButton === 'venta' ? 'bg-white text-blue-500' : 'hover:bg-[#fff] hover:text-blue-500'}`} onClick={() => handleClick('venta')}>Venta</button>
              <button className={`flex text-center text-base hover:font-semibold text-[#e9e9e8] font-semibold justify-center items-center w-1/2 h-auto rounded-md ${selectedButton === 'arriendo' ? 'bg-white text-blue-500' : 'hover:bg-[#fff] hover:text-blue-500'}`} onClick={() => handleClick('arriendo')}>Arriendo</button>
            </div>
            <div className='flex h-[70px] w-full pt-2 pb-1'>
            <div className='flex justify-center items-center bg-white rounded-l-lg py-[2px] pl-2 pr-6 w-[26%] relative h-full border-r text-[#456787] border-[#d8d8d8]' onClick={handleClickk}>
              {showTipoInmueble ? 
              <HiSearch className='text-[#bfbfbf] absolute right-3' size={15} /> : <SlArrowDown className='text-[#bfbfbf] absolute right-3' size={16} />} 
              <span className="text-base font-semibold text-[#456987]">{selectedOption || 'Selecciona'}</span>
            </div>
              {showTipoInmueble && (
                <div className="ubicaciones bg-[#fff] rounded-lg bottom-[252px] absolute w-[152px]">
                  <div className='w-full h-8 py-1 px-3 text-[#50708e]' onClick={() => handleSelectOption('Casa')}>Casa</div>
                  <div className='w-full h-8 py-1 px-3 text-[#50708e]' onClick={() => handleSelectOption('Apartamento')}>Apartamento</div>
                  <div className='w-full h-8 py-1 px-3 text-[#50708e]' onClick={() => handleSelectOption('Apartaestudio')}>Apartaestudio</div>
                </div>
              )}
              <input className='w-[64%] px-3 relative placeholder:text-[#bfbfbf] placeholder:text-lg placeholder:font-medium font-[mulishmedium] text-[#456787]' type="text" placeholder='🔍︎ Busca por ubicación' value={query} onChange={handleSearch} />
              <button className='w-[10%] bg-[#f9da88] rounded-e-lg flex justify-center items-center'>
                <CiSearch className='text-2xl text-[#082645]' />
              </button>
            </div>
            {/* Mostrar sugerencias */}
            {locations.length > 0 && (
              <div className="ubicaciones absolute w-[25%] h-[200px] right-[520px] bottom-[148px] bg-white rounded-s-xl overflow-y-auto">
                <p className='bg-[#e6f2fc] text-[#082663] px-3 py-1 text-sm'>Ubicación</p>
                {locations.map((location, index) => (
                  <div key={index} className="px-4 py-2 cursor-pointer text-[#0a2846] hover:bg-[#f0f0f0]" onClick={() => setQuery(location.formatted)}>
                    {location.formatted}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
