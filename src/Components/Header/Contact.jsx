import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

export const Contact = () => {
  return (
    <>
      <div className='bg-gray-800   h-8 flex text-white items-center hover:text-white transition-all duration-500 ease-in cursor-pointer  md:py-6 py-2 max-w-screen md:text-sm text-xs'>
        <div className='flex items-center md:mx-12 sm:mx-8  mx-4'>
          <FaPhoneAlt />
          <span className='sm:ml-2 ml-1'>1300489752</span>
        </div>
        <div className='flex items-center'>
          <FaMessage />
          <span className='sm:ml-2 ml-1'>hello@gmail.com</span>
        </div>
      </div>
    </>
  )
}
