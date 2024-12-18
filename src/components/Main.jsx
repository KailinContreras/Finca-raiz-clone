import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <main className='w-full h-auto bg-[#fafafa] flex justify-center flex-col items-center'>
        <p className='pt-16 pb-5 font-black text-4xl font-[mulishmedium] text-[#082645]'>Destacados</p>
        <div className='flex gap-8'>
            <div className='zoom-container w-80 h-[21rem] rounded-lg relative'>
                <Image className='zoom-content rounded-lg w-full h-full absolute z-10' src={'/image/destacada1.png'} width={300} height={400} alt='destacada1'/>
                <button className='border border-[#e0dcd8] text-center hover:bg-[#fdfdfd] hover:text-[#456787] absolute z-20 text-[#fdfdfd] text-xs bottom-3 right-3 font-bold px-3 w-auto h-9 rounded-md'>
                    <a target='blank' href="https://recomendados.fincaraiz.com.co/parque-central-de-occidente-3-ar-construcciones?_gl=1*hlio3w*_gcl_au*MTM4NDM5MzcwMy4xNzMwNjQ5NTEyLjg4MzMwNzIwMS4xNzMyODk2NDYzLjE3MzI4OTcxNDU.&_ga=2.73059735.562787368.1733177503-1399301191.1730649512">Conoce mas</a>
                </button>
            </div>
            <div className='zoom-container w-80 h-[21rem] rounded-lg relative'>
                <Image className='zoom-content rounded-lg w-full h-full absolute z-10' src={'/image/destacada2.png'} width={300} height={400} alt='destacada2'/>
                <button className='border border-[#e0dcd8] text-center hover:bg-[#fdfdfd] hover:text-[#456787] absolute z-20 text-[#fdfdfd] text-xs bottom-3 right-3 font-bold px-3 w-auto h-9 rounded-md'>
                    <a target='blank' href="https://amp.fincaraiz.com.co/mipko-arewa-5-de-diciembre?_ga=2.97642523.562787368.1733177503-1399301191.1730649512">Conoce mas</a>
                    </button>
            </div>
            <div className='zoom-container w-80 h-[21rem] rounded-lg relative'>
                <Image className='zoom-content rounded-lg w-full h-full absolute z-10' src={'/image/destacada3.png'} width={300} height={400} alt='destacada3'/>
                <button className='border border-[#e0dcd8] text-center hover:bg-[#fdfdfd] hover:text-[#456787] absolute z-20 text-[#fdfdfd] text-xs bottom-3 right-3 font-bold px-3 w-auto h-9 rounded-md'>
                    <a target='blank' href="https://amp.fincaraiz.com.co/evento-jimenez-constructores-5-de-diciembre?_ga=2.96632859.562787368.1733177503-1399301191.1730649512">Conoce mas</a>
                    </button>
            </div>
        </div>
        <p className='pt-9 font-black font-[mulishmedium] text-4xl text-[#082645] mb-4'>Mira como Fincaraíz te puede ayudar</p>
        <div className='flex flex-wrap'>
            <div className='text-center w-72 h-72 px-4'>
                <div className='w-full h-auto flex justify-center'>
                    <Image className='mx-[75px] w-40 h-auto' src={'/image/iconpropiedad.png'} width={200} height={200} alt='iconpropiedad'/>
                </div>
                <p className='font-[mulishmedium] text-xl font-semibold text-[#082645]'>Todas las propiedades</p>
                <p className='text-[#476988] text-base font-semibold'>Con más de 200.000 propiedades publicadas, alcanzamos el 97% de la oferta inmobiliaria del país</p>
            </div>
            <div className='text-center w-72 h-72 px-4'>
                <div className='w-full h-auto flex justify-center'>
                    <Image className='mx-[75px] w-40 h-auto' src={'/image/iconbusqueda.png'} width={200} height={200} alt='iconbusqueda'/>
                </div>
                <p className='font-[mulishmedium] text-xl font-semibold text-[#082645]'>Búsqueda exacta</p>
                <p className='text-[#476988] text-base font-semibold'>Nuestros filtros te permiten encontrar la propiedad que estás buscando en el menor tiempo posible.</p>
            </div>
            <div className='text-center w-72 h-72 px-4'>
                <div className='w-full h-auto flex justify-center'>
                    <Image className='mx-[75px] w-40 h-auto' src={'/image/icondata.png'} width={200} height={200} alt='icondata'/>
                </div>
                <p className='font-[mulishmedium] text-xl font-semibold text-[#082645]'>Big Data</p>
                <p className='text-[#476988] text-base font-semibold'>Diseñamos herramientas para que puedas tomar las mejores decisiones basadas en datos.</p>
            </div>
        </div>
        <div className='w-full h-auto bg-[#ffffff] flex'>
            <div className='w-[55%] py-10 px-5 flex flex-col items-center'>
                <p className='mb-1 text-[14px] text-[#102645] font-bold w-[600px]'>¡Encuentra tu casa con la app de Fincaraíz!</p>
                <p className='mb-4 text-[#082645] text-4xl font-[mulishmedium] font-bold w-[600px]'>Tu nuevo hogar a una descarga de distancia</p>
                <div className='flex w-[600px] h-56 gap-5 py-5'>
                    <div>
                        <div className='flex gap-4 mb-5 w-[290px] h-[72px] items-center font-bold text-[#476988]'>
                            <Image className='w-12 h-10' src={'/image/icon1.png'} alt="icon1" width={100} height={100}/>
                            <p className='text-[]'>Recibe notificaciones a medida que aparezcan nuevas oportunidades.</p>
                        </div>
                        <div className='flex gap-4 mb-5 w-[290px] h-[72px] items-center font-bold text-[#476988]'>
                            <Image className='w-12 h-10' src={'/image/icon2.png'} alt="icon2" width={100} height={100}/>
                            <p>Consulta directamente desde la app con respuestas en tiempo real.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4 mb-5 w-[290px] h-[72px] items-center font-bold text-[#476988]'>
                            <Image className='w-12 h-10' src={'/image/icon3.png'} alt="icon3" width={100} height={100}/>
                            <p>Filtra de la manera más precisa y encuentra tu casa más fácil.</p>
                        </div>
                        <div className='flex gap-4 mb-5 w-[290px] h-[72px] items-center font-bold text-[#476988]'>
                            <Image className='w-12 h-10' src={'/image/icon4.png'} alt="icon4" width={100} height={100}/>
                            <p>Guarda tus favoritos y recibe notificaciones si bajan de precio.</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-[600px] h-auto gap-4'>
                    <Link href="https://play.google.com/store/apps/details?id=co.com.fincaraiz.app" target='blank'>
                        <button className='w-[132px] h-10 bg-black text-white flex justify-center items-center p-2 text-left rounded-md leading-[10px]'>
                            <Image className='w-7 h-7' width={100} height={100} src={'/image/icongoogleplay.png'} alt="googleplay"/>
                            <p className='text-[9px] font-normal'>DISPONIBLE EN <span className='text-base font-bold'>Google Play</span></p>
                        </button>
                    </Link>
                    <Link href="https://apps.apple.com/co/app/finca-raiz-arriendo-y-venta/id1068634301" target='blank'>
                        <button className='w-[132px] h-10 bg-black text-white flex justify-center items-center p-2 text-left rounded-md leading-[10px]'>
                            <Image className='w-10 h-10' width={100} height={100} src={'/image/iconapple.png'} alt="apple"/>
                            <p className='text-[9px] font-normal'>DISPONIBLE EN <span className='text-base font-bold'>App Store</span></p>
                    </button>
                    </Link>
                    <Link href="https://appgallery.huawei.com/#/app/C101202375" target='blank'>
                        <button className='w-[132px] h-10 bg-black text-white flex justify-center items-center p-2 text-left rounded-md leading-[10px]'>
                            <Image className='w-7 h-7' width={100} height={100} src={'/image/iconhuawei.png'} alt="huawei"/>
                            <p className='text-[9px] font-normal'>DISPONIBLE EN <span className='text-base font-bold'>App Gallery</span></p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='w-[45%] bg-[#fad676] rounded-ss-full rounded-bl-3xl relative'>
                <div className='absolute bottom-0 left-10'>
                    <Image className='w-64 h-96' src={'/image/logocell.png'} width={500} height={500} alt='logocell'/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main