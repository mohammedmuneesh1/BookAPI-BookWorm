import React from 'react';
import bg1 from '../Assest/bg3.png';
import books from '../Assest/books.png';
import '../Body/Body.css'
export const Banner = () => {
  return (
    
<div className='w-screen min-h-[84vh] sm:pt-20 pt-0 z-[-2]' style={{
  background: `url(${bg1})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}>
      
      <div className='b-box'>
        <div className='b-box1'>
        <h1>Expand Knowledge By Reading Book</h1>
        <p>Reading is the process of taking in the sense of letters, symbols, etc, especially by sight or touch. Discover the University of for education and researchers.</p>
      <br/>
        <div className='searchbar'>
        <label
    className="relative bg-white min-w-sm max-w-xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
    htmlFor="search-bar"
  >
            <input
              id="search-bar"
              placeholder="your keyword here"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            />
            <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
              <div className="relative">
                {/* Loading animation change opacity to display */}
                <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                  <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <div className="flex items-center transition-all opacity-1 valid:">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </div>
              </div>
            </button>
          </label>
        </div>
        </div>
          <img  className="b-box-img" src={books} alt='book picture' />
        
      </div>




      {/* <div className='flex flex-wrap justify-around'>
        <div className='text'>
        <h1 className='text-black lg:text-6xl md:text-5xl sm:text-3xl text-xl font-serif md:tracking-wide tracking-normal font-bold'>Expand Knowledge By Reading Book</h1>
        <br/>
        <p className='tacking-wide text-justify text-base lg:w-2/3 w-full'>Reading is the process of taking in the sense of letters, symbols, etc, especially by sight or touch. Discover the University of for education and researchers.</p>
      
        </div>
      </div> */}

     
    </div>
  );
};
