import React from 'react'
import atomic from '../Components/Assest/atomic-habit.jpg'

export const Card = () => {
  return (
    <div className='max-w-[250px] min-h-[400px] border-2  p-3 mb-3 text-center' >
    <img src={atomic} className='overflow-hidden w-screen h-[280px]' />
    <div>
    {/* <h3 className='leading-5'>This is some text with line height 1.5</h3> sm:text-lg font-semibold */}
    {/* <h3 className=' sm-text-lg leading-5 mt-1'>Atomic Habit Tiny Changes by magic points</h3> */}

        <h3 className=' leading-3 sm:text-lg  font-semibold  mt-1'>Atomic Habit Tiny Changes by magic points</h3>
        <span className=' text-sm text-gray-400 font-xs'> By James Clear</span>
        <br/>
        <span className='font-semibold'>₹40.99</span>
    </div>
    </div>
  )
}
