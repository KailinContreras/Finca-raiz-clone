'use client';
import React, { useState } from 'react';
import { ref, push,} from 'firebase/database';
import { database } from '@/Firebase/Firebase';
import { SlArrowRight } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { TbHomePlus } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import { FaRegEnvelope } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";

const Page = () => {
  const [valor, setValor] = useState('');
  const [estado, setEstado] = useState('');
  const [categoria, setCategoria] = useState('');
  const [images, setImages] = useState(null);
  const [ubicacion, setUbicacion] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
 
  const handleClick = (li) => {
    setSelectedButton(li);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      price: valor,
      tipoOferta: estado,
      tipoInmueble: categoria,
      ubicacion: ubicacion,
      images: images ? images.map(file => file.name) : []
    };

    const dbRef = ref(database, 'inmuebles');
    push(dbRef, formData)
      .then(() => {
        alert('Datos enviados correctamente');
        setValor('');
        setEstado('');
        setCategoria('');
        setUbicacion('');
        setImages(null);
      })
      .catch((error) => {
        console.error('Error al enviar los datos:', error);
      });
  };

  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  return (
    <div className="w-full h-screen bg-[#f2f6fd] flex">
      <div className='w-[5.5%] h-screen bg-[#ffffff] flex flex-col items-center'>
        <header className='px-4 pt-4 w-[84px] h-24 flex items-center justify-center'>
          <button className='botonarrow w-8 h-8 bg-[#ffffff] rounded-full flex justify-center items-center hover:bg-[#d0d0d047]'>
            <SlArrowRight className='text-[#5c7996]'/>
          </button>
        </header>
        <nav className='w-[84px] h-[644px] py-4 flex flex-col items-center'>
          <ul className='w-[84px] h-[424px] px-4 flex flex-col items-center gap-2'>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'favorites' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('favorites')}>
              <FaRegHeart className='text-2xl text-[#456787]' />
            </li>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'publish' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('publish')}>
              <TbHomePlus className='text-2xl text-[#456787]' />
            </li>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'administer' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('administer')}>
              <MdOutlineMapsHomeWork className='text-2xl text-[#456787]' />
            </li>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'shopping' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('shopping')}>
              <MdOutlineShoppingCart className='text-2xl text-[#456787]' />
            </li>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'tablaleads' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('tablaleads')}>
              <TiThMenuOutline className='text-2xl text-[#456787]' />
            </li>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'contacts' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('contacts')}>
              <FaRegEnvelope className='text-2xl text-[#456787]' />
            </li>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'history' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('history')}>
              <BsCardText className='text-2xl text-[#456787]' />
            </li>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'statistics' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('statistics')}>
              <TbWorld className='text-[26px] text-[#456787]' />
            </li>
            <li className={`w-[52px] h-10 rounded-lg hover:bg-[#f2f6fd] py-2 px-4 flex items-center ${selectedButton === 'blog' ? 'bg-[#f2f6fd]' : 'hover:bg-[#f2f6fd]'}`} onClick={() => handleClick('blog')}>
              <HiOutlineNewspaper className='text-2xl text-[#456787]' />
            </li>
          </ul>
        </nav>
      </div>
      <div className='w-[94.5%] h-screen flex flex-col items-center'>
        <header className='bg-[#ffffff] flex text-left w-full h-[76px] py-6 pl-8 pr-3 flex-col justify-center'>
          <p className='text-[22px] font-semibold text-[#456787] font-[mulishmedium]'>Publicar inmueble</p>
        </header>
        <div className='mt-[76px] mx-[197px] w-[786px] h-auto'>
          <p className='text-center text-base text-[#082645] font-[mulishmedium] pb-8'>Publica <span className='font-semibold font-[mulishmedium] text-base text-[#082645]'>dos anuncios clasificados Gratis* para venta o arriendo</span> de vivienda o inmuebles comerciales</p>
          <div>
            <form className="flex flex-col relative" onSubmit={handleSubmit}>
              <label className='font-semibold text-lg pb-2 text-[#171f31]'>Tipo de oferta</label>
              <select value={estado} onChange={(e) => setEstado(e.target.value)} className='rounded-lg'>
                <option value="Venta">Venta</option>
                <option value="Arrienda">Arriendo</option>
                <option value="Venta y Arriendo">Venta y Arriendo</option>
              </select>

              <label className='font-semibold text-lg pt-6 text-[#171f31]' htmlFor="">Tipo de inmueble</label>
              <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className='rounded-lg'>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Apartaestudio">Apartaestudio</option>
              </select><br />

              <label htmlFor="image" className="bg-[#ffffff] text-[#171f31] cursor-pointer h-16 justify-center px-2 border border-dashed text-base font-bold flex flex-col rounded-lg">
                Sube o arrastra las fotos aquí
                <span className="text-[#768899] text-xs font-thin">Sube mínimo 1 máximo 20 fotos de tu inmueble</span>
                <input className="hidden" id="image" type="file" multiple onChange={handleFileChange}/>
              </label>

              <label htmlFor="ubicacion" className='text-[#171f31] pt-6 font-semibold'>Ubicación</label>
              <input type="text" id='ubicacion' value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} placeholder='Agrega la ubicación' className='h-8 rounded-lg px-2 text-base'/>

              <label className='font-semibold text-lg pb-2 pt-6 text-[#171f31]' htmlFor="valor">Valor</label>
              <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} placeholder='Ingresa un valor' id='valor' className='h-8 font-normal text-base rounded-lg pb-6 px-2 pt-5'/>

              <button className='text-[#171f31] bg-[#f9da88] rounded-lg w-24 h-8 text-base font-semibold absolute -bottom-10 left-[340px]' type="submit">Publicar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
