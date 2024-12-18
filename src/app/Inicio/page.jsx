'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Main from '@/components/Main';
import SearchSection from '@/components/SearchSection'

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
