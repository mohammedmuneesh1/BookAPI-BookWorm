import React from 'react'
import { Card1 } from '../Card1'
export const Popular = () => {
  return (
    <div className='sm:p-3 p-1 sm:mt-4 mt-1'>
      <h1 className=' ml-8 sm:text-3xl font-serif font-bold'>Popular Books</h1>
      <div className='mt-10  sm:mb-10 mb-5    md:mx-auto m-0 md:max-w-[95%]  max-w-screen font-medium  lg:text-lg sm:text-sm text-xs flex  flex-row flex-nowrap sm:justify-around justify-between  font-serif '>
        <span>All</span>
        <span>Fiction</span>
        <span>Business</span>
        <span>Biography</span>
        <span>Motivational</span>
        <span>Horror</span>
        <span>Kids Category</span>
      </div>
      <div className='flex flex-wrap justify-around  max-w-[100%] mx-auto mb-5 '>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className='text-center'>
      <button className='rounded-sm bg-red-600 p-2 text-white text-center'>Load More ▼</button>
      </div>
    </div>
  )
}
