import React from 'react'
import { Card } from '../Card'
import harrypotter from '../Assest/harry-potter.jpg'

export const Featured = () => {
  return (
<>
<div className='p-5 '>
<div className='flex justify-between sm:p-5 p-2 mb-10'>
<h1 className='lg:text-2xl md:text-xl text-lg text-gray-700 sm:tracking-normal tracking-tight font-poppins font-semibold'>Featured Books</h1>
<span className=' md:text-lg text-base  text-orange-500  sm:tracking-normal tracking-tight'>View All Books</span>
</div>
<div className='flex flex-wrap justify-around  max-w-[100%] mx-auto mb-5 ' >
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>

  <img src={harrypotter}  className="mx-auto w-[96%]" alt='book posture' /> 
  {/* style={{height:"500px"}} */}
</div>
</>
  )
}
