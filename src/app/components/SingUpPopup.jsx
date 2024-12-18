"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { facebookProvider } from '@/Firebase/Firebase';
import { auth } from '@/Firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


const SingUpPopup = ({ onClose, formData, onSubmit }) => {
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      if (value === '') {
        setEmailError('Por favor ingrese un correo');
      } else if (!validateEmail(value)) {
        setEmailError('Por favor ingrese un correo válido');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (emailError) return;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log('Usuario registrado:', userCredential.user);
  
      toast.success('¡Gracias por registrarte!', {
        position: "top-center",
        autoClose: 3000,
      });
  
      setTimeout(() => {
        onClose();
        router.push('/');
      }, 3000);      
  
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
          console.log('Inicio de sesión exitoso:', userCredential.user);
  

          toast.success('¡Has iniciado sesión correctamente!', {
            position: "top-center",
            autoClose: 3000,
          });
  
          setTimeout(() => {
            onClose();
            router.push('/');
          }, 3000);
  
        } catch (loginError) {
          console.error('Error al iniciar sesión:', loginError);
          toast.error('Error al iniciar sesión. Verifica tu contraseña.', {
            position: "top-center",
          });
        }
      } else {
        console.error('Error en registro:', error);
        toast.error('Error al registrarte. Inténtalo nuevamente.', {
          position: "top-center",
        });
      }
    }
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("Usuario logueado:", result.user);
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-50 p-[5px] backdrop-blur-[5px] flex justify-center items-center'>
      <div onClick={(e) => e.stopPropagation()} className='popup w-[550px] h-[650px] bg-[#fff] rounded-[7.5px] text-center flex items-center flex-col'>
        <div className='border-[#f0f0f0] border-b w-full h-auto p-2 flex justify-end'>
          <Image onClick={onClose} className='w-10 h-10' src={'/image/close.png'} width={100} height={100} alt='Close' />
        </div>
        <div className='w-full h-auto p-5 flex-col flex justify-center items-center'>
          <div className='mb-6 w-[165px] h-10'>
            <Image className='max-w-full max-h-full' src={'/image/logofr.png'} width={200} height={200} alt='Logo' />
          </div>
          <div className='pb-2'>
            <h4 className='mx-[125px] text-xl font-black text-[#082645]'>Ingresa o Registrate para ver tu actividad</h4>
          </div>
          <div className='w-full h-auto pb-5 border-b border-b-[#f0f0f0]'>
            <form onSubmit={handleSubmit} className='w-full h-auto'>
              <label htmlFor="email" className='w-full h-7 flex items-center justify-start pb-0 mb-1 text-[11px] text-[#808080]'>Correo Electrónico</label>
              <input name="email" type="email" value={data.email} onChange={handleChange} required className={`input1 border text-[#4d6d8b] text-xs rounded-lg py-[6.4px] px-[11px] w-full h-[42px] placeholder:text-xs ${emailError ? 'border-red-500' : 'border-[#d9d9d9]'} hover:border-[#fff1c0]`} placeholder='Ingresa tu correo electrónico'/>
              {emailError && <p className='text-[#f57b57] text-left text-[11px] mt-1'>{emailError}</p>}
              <label htmlFor="password" className='w-full h-7 flex items-center justify-start pb-0 mb-1 mt-2 text-[11px] text-[#808080]'>Contraseña</label>
              <input name="password" type="password" value={data.password} onChange={handleChange} required className='input1 border border-[#d9d9d9] text-[#4d6d8b] text-xs hover:border-[#fff1c0] rounded-lg py-[6.4px] px-[11px] w-full h-[42px] placeholder:text-xs placeholder:text-[#c7c7c7]' placeholder='Ingrese una contraseña'/>
            </form>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button type='submit' onClick={handleSubmit} className='continuar bg-[#f9da88] w-full h-[42px] text-[#082645] text-sm font-bold rounded-lg border border-[#f9da88] px-6 mb-2 mt-4'>Continuar</button>
            <p className='line text-[#a7a7a7] text-sm font-bold mb-2'>O</p>
            <button onClick={handleFacebookLogin} className='boton2 hover:border-[#8799d3] border border-[#d9d9d9] rounded-lg w-full h-[42px] flex mb-6 justify-center items-center'>
              <Image className='w-4 h-4' src={'/image/iconfacebook.png'} width={100} height={100} alt='iconfacebook' />
              <p className='ml-2 text-[#456787] text-base font-bold'>Continuar con Facebook</p>
            </button>
            <button onClick={handleGoogle} className='boton3 mt-5 hover:border-[#e8867d] border border-[#d9d9d9] rounded-lg w-full h-[42px] flex mb-2 justify-center items-center'>
              <Image className='w-5 h-5' src={'/image/icongoogle.png'} width={100} height={100} alt='icongoogle' />
              <p className='ml-2 text-[#456787] text-base font-bold'>Continuar con Google</p>
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUpPopup;
