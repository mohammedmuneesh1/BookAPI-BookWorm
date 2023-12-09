import React from 'react'
import { Card } from '../Card'
export const Popular = () => {
  return (
    <div className='p-3'>
      <h1 className=' ml-4 sm:text-2xl font-serif text-bold'>Popular Books</h1>
      <div className='mt-10 mb-30 mx-auto max-w-[85%]  text-xl flex  flex-row flex-nowrap justify-around bg-pink-300 font-poppin '>
        <span>All</span>
        <span>Fiction</span>
        <span>Business</span>
        <span>Biography</span>
        <span>Motivational</span>
        <span>Horror</span>
        <span>Kids Category</span>
      </div>
      <div className='flex flex-wrap justify-around  max-w-[100%] mx-auto mb-5 '>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
