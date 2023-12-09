import React from 'react'
import atomic from '../Components/Assest/atomic-habit.jpg'


export const Card1 = () => {
  return (
    <div className='max-w-[250px] min-h-[400px] border-2  px-3 pt-3 mb-3 ' >
    <img src={atomic} className='overflow-hidden w-screen h-[220px]' />
    <div className='text-center'>
    {/* <h3 className='leading-5'>This is some text with line height 1.5</h3> sm:text-lg font-semibold */}
    {/* <h3 className=' sm-text-lg leading-5 mt-1'>Atomic Habit Tiny Changes by magic points</h3> */}

        <h3 className=' leading-3 sm:text-lg  font-semibold  mt-1'>Atomic Habit Tiny Changes by magic points</h3>
        <span className=' text-sm text-gray-400 font-xs'> By James Clear</span>
        <br/>
        <span className='font-semibold'>₹40.99</span>
        <br/>
        <button className='mt-1 rounded-sm bg-red-500 p-2 text-white text-sm '>Add to Cart </button>
    </div>
    </div>
  )
}
