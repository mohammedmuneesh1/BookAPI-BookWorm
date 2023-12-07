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
//     <div className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
//     href="#">
//     <img src={atomic} className="shadow rounded-lg overflow-hidden border" />
//     <div class="mt-8">
//         <h4 class="font-bold text-xl">Exercises</h4>
//         <p class="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
//         </p>
//         <div class="mt-5">
//             <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
//         </div>
//     </div>
// </div>
  )
}
