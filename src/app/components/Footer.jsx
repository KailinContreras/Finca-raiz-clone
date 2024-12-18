import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='w-full h-auto bg-[#fafafa]'>
        <div className='py-8 mx-24 w-auto h-auto'>
            <hr className='bg-[#C1C5D2] w-auto my-8 h-[2px]'></hr>
            <div className='flex w-full gap-10'>
                <div className='w-[136px] h-44 mb-2 flex flex-col items-start relative'>
                    <p className='mb-2 text-[#456787] font-semibold text-base'>Lo más buscado</p>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Finca Raíz en Barranquilla</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Finca Raíz en Bogotá</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Finca Raíz en Bucaramanga</a>
                    <button className='text-[#077be7] text-xs absolute bottom-0'>Más</button>
                </div>
                <div className='w-[157px] h-44 mb-2 flex flex-col items-start relative'>
                    <p className='mb-2 text-[#456787] font-semibold text-base'>Venta</p>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Apartamentos en venta en Armenia</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Apartamentos en venta en Arauca</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Apartamentos en venta en Barranquilla</a>
                    <button className='text-[#077be7] text-xs absolute bottom-0'>Más</button>
                </div>
                <div className='w-[167px] h-44 mb-2 flex flex-col items-start relative'>
                    <p className='mb-2 text-[#456787] font-semibold text-base'>Arriendo</p>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Apartamentos en arriendo en Armenia</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Apartamentos en arriendo en Arauca</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Apartamentos en arriendo en Barranquilla</a>
                    <button className='text-[#077be7] text-xs absolute bottom-0'>Más</button>
                </div>
                <div className='w-[193px] h-44 mb-2 flex flex-col items-start relative'>
                    <p className='mb-2 text-[#456787] font-semibold text-base'>Proyectos de vivienda</p>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Proyectos de vivienda en Armenia</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Proyectos de vivienda en Arauca</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Proyectos de vivienda en Barranquilla</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Proyectos de vivienda en Bogotá</a>
                    <button className='text-[#077be7] text-xs absolute bottom-0'>Más</button>
                </div>
                <div className='w-48 h-44 mb-2 flex flex-col items-start relative'>
                    <p className='mb-2 text-[#456787] font-semibold text-base'>Te puede interesar</p>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Venta de casas en Cali hasta de 120 millones</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Apartaestudios en arriendo Armenia</a>
                    <a className='text-xs hover:text-[#077be7] leading-5 text-[#456787] font-medium' href="">Lotes en Carmen de Apicalá</a>
                    <button className='text-[#077be7] text-xs absolute bottom-0'>Más</button>
                </div>
                <div className='w-[67px] h-44 mb-2 flex flex-col items-start'>
                    <p className='mb-2 text-[#456787] font-semibold text-base'>Siguenos</p>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7] flex items-center gap-1' target="_blank" href="https://x.com/i/flow/login?redirect_after_login=%2Ffincaraizfr"><RiTwitterXFill />X</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7] flex items-center gap-1' target="_blank" href="https://www.linkedin.com/company/fincaraiz-com-co/"><FaLinkedin />Linkedln</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7] flex items-center gap-1' target="_blank" href="https://www.youtube.com/c/fincaraiz"><FaYoutube />Youtube</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7] flex items-center gap-1' target="_blank" href="https://www.instagram.com/fincaraiz.com.co/"><AiFillInstagram />Instagram</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7] flex items-center gap-1' target="_blank" href="https://www.facebook.com/fincaraiz.com.co"><AiFillFacebook />Facebook</a>
                </div>
                <div className='w-[182px] h-44 mb-2 flex flex-col items-start'>
                    <p className='mb-2 text-[#456787] font-semibold text-base'>Acerca de nosotros</p>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7]' target="_blank" href="https://www.fincaraiz.com.co/informacion#preguntas-frecuentes">Preguntas Frecuentes</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7]' target="_blank" href="https://www.fincaraiz.com.co/informacion#aviso-legal">Aviso Legal</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7]' target="_blank" href="https://www.fincaraiz.com.co/informacion#terminos-y-condiciones">Términos y Condiciones</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7]' target="_blank" href="https://www.fincaraiz.com.co/informacion#politicas-de-privacidad">Políticas de tratamiento de datos</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7]' target="_blank" href="https://www.fincaraiz.com.co/informacion#anuncia-con-nosotros">Nosotros</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7]' target="_blank" href="https://www.fincaraiz.com.co/informacion#recomendaciones-de-seguridad">Recomendaciones de Seguridad</a>
                    <a className='text-xs leading-5 text-[#456787] font-medium hover:text-[#077be7]' target="_blank" href="https://www.fincaraiz.com.co/informacion#politicas-de-cookies">Políticas de Cookies</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer