import React from 'react'
import { Card1 } from '../Card1'
export const SearchResult = ({ data }) => {
  console.log(data)
  data.map(value=> console.log(value?.volumeInfo))
  // console.log(data.map(value=>console.log(value)))
  return (
    <div className='max-w-[95%] mx-auto bg-red-500 md:mt-7  mt-5'>
      <h1 className='lg:text-2xl md:text-xl text-lg text-gray-700 font-semibold '>
        Search Result
      </h1>
      {data?.map((value, index) => (
        
        <div
          key={index}
          className='max-w-[250px] min-h-[400px] border-2  p-3 mb-3 text-center'
        >
          <img
            src={data?.value?.volumeInfo?.imageLinks?.smallthumbnail}
            className='overflow-hidden w-screen h-[280px]'
          />
          <div>
            <h3 className=' leading-3 sm:text-lg  font-semibold  mt-1'>
      {value?.volumeInfo?.title}
            </h3>
            <span className=' text-sm text-gray-400 font-xs'>
              {' '}
      {value?.volumeInfo?.authors[0]}
            </span>
            <br />
            <span className='font-semibold'>₹40.99</span>
          </div>
        </div>
      ))}
    </div>
  )
}
