import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import FeaturedProperty from '../components/FeaturedProperty'
import Header from '../components/Header'
import Mail from '../components/Mail'
import Navbar from '../components/Navbar'
import PropertyList from '../components/PropertyList'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
export default function Home() {
  return (
    <div >
        <Navbar/>
        <Header/>
        <Banner/>
        <Featured/>
        <PropertyList/>
        <FeaturedProperty/>
        <Mail/>
        <Footer/>
        <CopyRight/>
    </div>
  )
}
