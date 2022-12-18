import React from 'react'

export default function Featured() {
  return (
    <>
    <div className="mt-8 w-3/4  m-auto">
    <h1 className=' text-center py-4 text-2xl font-bold'>let's Explore the World Together</h1>
    <div className='flex space-x-4'>

    
        <div className="feauturedItem relative">
            <img className='object-cover' src="https://cf.bstatic.com/xdata/images/city/540x270/957800.jpg?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt="" />
        <h1 className='text-xl absolute cursor-pointer top-0 text-white p-3'>Dublin</h1>
        </div>
        <div className="feauturedItem relative">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/823860.jpg?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o=" alt="" />
        <h1 className='text-xl absolute cursor-pointer top-0 text-white font-medium p-3'>Turkey</h1>
        </div>
        <div className="feauturedItem relative">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/957800.jpg?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt="" />
        <h1 className='text-xl absolute cursor-pointer top-0 text-white p-3'>Dublin</h1>
        </div>


    </div>
    </div>
    </>
  )
}
