'use client';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header'
import Main from '@/Components/Main';
import SearchSection from '@/Components/SearchSection'

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
