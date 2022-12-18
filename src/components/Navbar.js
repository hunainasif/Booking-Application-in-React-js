import React from 'react'
import { Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div className='bg-[#003580] h-14 sticky top-0 left-0 z-10'>
      <div className="container flex text-white items-center pt-2 m-auto justify-between w-3/4">
        <Link to="/">
        <h1 className='font-bold text-3xl'>Honey</h1>
        </Link>
        <div className="buttons space-x-1 ">
            <button className='bg-white text-[#003580] p-1 w-[80px]  '>Login</button>
            <button className='bg-white text-[#003580] p-1 w-[90px]'>Register</button>
        </div>
      </div>
    </div>
  )
}
