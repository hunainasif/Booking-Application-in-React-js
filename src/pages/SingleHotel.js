import React from 'react'
import CopyRight from '../components/CopyRight'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mail from '../components/Mail'
import Navbar from '../components/Navbar'

export default function SingleHotel() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Mail/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}
