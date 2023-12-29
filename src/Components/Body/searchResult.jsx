import React, { useEffect, useRef, useState } from 'react';
import { Modal } from './modal';

export const SearchResult = ({ data }) => {
  // console.log(data.map(value=>value.saleInfo.listPrice))
  const [showResults, setShowResults] = useState(false);
  const resultRef = useRef(null);

  //modal
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [modal,setModal] = useState(false);



  useEffect(() => {
    // Add a delay to simulate loading and then show the results with an animation
    const delay = setTimeout(() => {
      setShowResults(true);
    }, 3000);
  
    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);
  
  useEffect(() => {
    // Scroll into view when showResults becomes true
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showResults]);

  



  return (
    <div  ref={resultRef} className='max-w-[95%] mx-auto md:mt-7 mt-5'>
      <h1 className='lg:text-2xl md:text-xl text-lg text-gray-700 font-semibold md:mb-8 mb-5'>
        Search Result
      </h1>

      <div className={`flex flex-wrap  lg:justify-start justify-between  max-w-[100%] mx-auto mb-5`}>
        {showResults
          ? data?.map((value, index) => {
              let imgSrc =
                value?.volumeInfo.imageLinks?.thumbnail &&
                value?.volumeInfo.imageLinks?.smallThumbnail;
                let amount = value.saleInfo.listPrice
                // let saleStatus = value.saleInfo.saleability;

                // let amount = value?.

              if (imgSrc !== undefined && amount !=undefined && amount.amount !== 0) {
                return (
                  <>
                  <div
                  onClick={() =>{ setModal(true) 
                    setSelectedItemIndex(index)}}
                    key={index}
                    className='max-w-[250px] min-h-[400px] border-2 p-3 mb-3 md:mx-4 mx-auto text-center transform transition-transform hover:scale-105 hover:shadow-lg'
                  >
                    <img
                      src={imgSrc}
                      alt={`${value?.volumeInfo?.title} image`}
                      className='overflow-hidden w-screen h-[280px]'
                    />
                    <div>
                      <h3 className='leading-3 sm:text-lg font-semibold mt-1'>
                        {value?.volumeInfo?.title}
                      </h3>
                      <span className='text-sm text-gray-400 font-xs'>
                        {' '}
                        {value?.volumeInfo?.authors}
                      </span>
                      <br />
                      <span className='font-semibold'>₹{amount.amount}</span>
                    </div>
                  </div>
                  {modal && selectedItemIndex === index && <Modal item={value}   close={() => setModal(false)} />}
                  </>
                );
              }
            })
          : (
          
            <main className='w-[100%]  flex justify-center'>
            <svg class="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5ebd3e" />
                  <stop offset="33%" stopColor="#ffb900" />
                  <stop offset="67%" stopColor="#f78200" />
                  <stop offset="100%" stopColor="#e23838" />
                </linearGradient>
                <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#e23838" />
                  <stop offset="33%" stopColor="#973999" />
                  <stop offset="67%" stopColor="#009cdf" />
                  <stop offset="100%" stopColor="#5ebd3e" />
                </linearGradient>
              </defs>
              <g fill="none" strokeLinecap="round" strokeWidth="16">
                <g class="ip__track" stroke="#ddd">
                  <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                  <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
                </g>
                <g strokeDasharray="180 656">
                  <path class="ip__worm1" stroke="url(#grad1)" strokeDashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                  <path class="ip__worm2" stroke="url(#grad2)" strokeDashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
                </g>
              </g>
            </svg>
          </main>
           
          )}
      </div>
    </div>
  );
};
