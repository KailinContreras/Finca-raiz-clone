import Image from 'next/image'
import React, { useState } from 'react'

const PopupIngresar = ({ onClose }) => {
    // Estado para controlar el valor del input y el mensaje de error
  const [email, setEmail] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // Manejar el cambio en el input de correo electrónico
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0) {
      setShowErrorMessage(true); // Mostrar el mensaje si el input tiene algo
    } else {
      setShowErrorMessage(false); // Ocultar el mensaje si el input está vacío
    }
  };
  return (
    <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-50 p-[5px] backdrop-blur-[5px] flex justify-center items-center'>
        <div onClick={(e) => e.stopPropagation()} className='w-[550px] h-[650px] bg-[#fff] rounded-[7.5px] text-center flex items-center flex-col'>
            <div className='border-[#f0f0f0] border-b w-full h-auto p-2 flex justify-end'>
                <Image onClick={onClose} className='w-10 h-10' src={'/image/close.png'} width={100} height={100} alt='Close'/>
            </div>
            <div className='w-full h-auto p-5 flex-col flex justify-center items-center'>
                <div className='mb-6 w-[165px] h-10'>
                    <Image className='max-w-full max-h-full' src={'/image/logofr.png'} width={200} height={200} alt='Logo'/>
                </div>
                <div className='pb-2'>
                    <h4 className='mx-[125px] text-xl font-black text-[#082645]'>Ingresa o Registrate para ver tu actividad</h4>
                </div>
                <div className='w-full h-auto pb-5 border-b border-b-[#f0f0f0]'>
                    <form className='w-full h-auto'>
                        <div className='w-full h-7 flex items-center justify-start pb-2'>
                            <label className='text-[10px] text-[#808080]'>Correo Electrónico</label>
                        </div>
                        <input className='input1 border border-[#d9d9d9] text-[#4d6d8b] text-xs hover:border-[#fff1c0] rounded-lg py-[6.4px] px-[11px] w-full h-[42px] placeholder:text-xs placeholder:text-[#c7c7c7]' value={email} onChange={handleInputChange} type="text" placeholder='Ingresa tu correo electrónico'/>
                        {showErrorMessage && email.length > 0 && (
                            <p className="text-xs w-full text-left h-4 text-[#f24e1e]">Por favor ingrese un correo valido</p>
                        )}
                        <button className='continuar bg-[#f9da88] w-full h-[42px] text-[#082645] text-sm font-bold rounded-lg border border-[#f9da88] px-6 mt-4'>Continuar</button>
                    </form>
                    <p className='line text-[#a7a7a7] text-sm font-bold'>O</p>
                    <button className='boton2 hover:border-[#8799d3] border border-[#d9d9d9] rounded-lg w-full h-[42px] flex justify-center items-center'>
                        <Image className='w-4 h-4' src={'/image/iconfacebook.png'} width={100} height={100} alt='iconfacebook'/>
                        <p className='ml-2 text-[#456787] text-base font-bold'>Continuar con Facebook</p>
                    </button>
                    <button className='boton3 mt-5 hover:border-[#e8867d] border border-[#d9d9d9] rounded-lg w-full h-[42px] flex justify-center items-center'>
                        <Image className='w-5 h-5' src={'/image/icongoogle.png'} width={100} height={100} alt='icongoogle'/>
                        <p className='ml-2 text-[#456787] text-base font-bold'>Continuar con Google</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopupIngresar