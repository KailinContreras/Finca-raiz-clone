'use client';
import React, { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database';
import { database } from '@/Firebase/Firebase';

const Date = () => {
    const [inmuebles, setInmuebles] = useState([]);

  useEffect(() => {

    const dbRef = ref(database, 'inmuebles');


    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setInmuebles(formattedData);
      } else {
        setInmuebles([]);
      }
    });

    return () => unsubscribe();
  }, []);
    return (
        <div className='w-full h-screen relative top-16 bg-[#fafafa] z-20'>
          <div className="p-4 mx-4 py-8 px-[136px]">
            <p className="text-xl font-black text-[#082645] mb-4">Venta de proyectos en Colombia</p>
            {inmuebles.length > 0 ? (
              <div className='flex gap-4 flex-wrap'>
                {inmuebles.map((inmueble) => (
                  <div key={inmueble.id} className="border border-[#077be7] rounded-lg w-[388px] h-[450px] p-2 mb-2">
                    {inmueble.images && inmueble.images.length > 0 && (
                      <div className='w-full h-[250px]'>
                          {inmueble.images.map((image, index) => (
                            <p key={index}>{image}</p>
                          ))}
                      </div>
                    )}
                    <div className='w-full h-[200px]'>
                      <p className='font-bold text-lg text-[#3f3f3f]'>{inmueble.price}</p>
                      <p className=' font-normal text-xs text-[#303c6b]'>{inmueble.tipoOferta}</p>
                      <p className='font-semibold text-sm text-[#303c6b]'>{inmueble.tipoInmueble}</p>
                      <p className='font-semibold text-base text-[#303c6b]'>{inmueble.ubicacion}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
            <p>No hay inmuebles disponibles.</p>
        )}
        </div>
    </div>
    )
}
export default Date;
