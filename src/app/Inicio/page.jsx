'use client';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header'
import Main from '@/app/components/Main';
import SearchSection from '@/app/components/SearchSection'

const page = () => {
  return (
    <div className='w-full h-screen'>
        <Header/>
        <SearchSection/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default page
