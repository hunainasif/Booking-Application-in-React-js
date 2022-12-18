import React from 'react'

export default function Mail() {
  return (
    <div className='bg-[#00224f] h-1/3'>
        <div className="container w-3/4 m-auto  flex items-center justify-center flex-col text-white py-14">
        <h1 className='text-2xl'>Save time, save money!</h1>
        <p className='text-xl text-gray-400'>Sign up and we'll send the best deals to you</p>
        <div className="item py-4">

        <input type="text"  className="text-black focus:outline-none rounded p-3 w-96" placeholder='Your Email' />
        <button className='bg-[#0071c2] p-3 rounded mx-3 text-base'>Subscribe</button>
        </div>
        </div>
    </div>
  )
}
