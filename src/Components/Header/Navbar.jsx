import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import logo from '../Assest/logo.png'
import bookworm from '../Assest/BookwormLogo.png'
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";

// Custom hook to handle window width updates
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return windowWidth;
};

export  function Navbar() {
  const windowWidth = useWindowWidth();
  const isWideScreen = windowWidth > 768;
  const [open, setOpen] = useState(false);
  let links = [
   
    { name: "Home", link: "/" },
    { name: "Category", link: "/" },
    { name: "Collections", link: "/" },
    { name: `Contact Us`, link: "/" },
  ];
  return (
    <>
      <div className="shadow-md w-screen sticky top-0 left-0 z-[1]">
        <div className="flex bg-white md:py-6 py-4 items-center justify-between md:px-5 px-3 font-serif font-semibold  tracking-wide ">
          <div className=" cursor-pointer">
            <img src={bookworm}  className=" sm:w-40 sm:h-15  w-30 h-8"/>
          </div>
      
          <ul
          className={`md:flex md:items-center md:pb-0 pb-8 md:static absolute bg-white  md:bg-transparent 
md:z-auto z-[-1] left-0 md:w-auto w-full md:pl-0 pl-9 transition-top ${
  isWideScreen ? 'no-transition' : 'duration-500 ease-in'
} ${open ? 'top-16 left-0 opacity-100 m-0 p-0' : ' top-16 left-[-800px]'}`}
          >
         {links.map((value, index) => (
              <li key={index} className="md:ml-8 md:my-0 my-7">
                <a
                  href={value.link}
                  className="text-grey-800 hover:text-gray-400 duration-500"
                >
                  {value.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex  sm:text-2xl  text-base cursor-pointer font-medium">
          <FaRegHeart className="mr-2 md:mr-4" />
          <CgProfile className="mr-2 md:mr-4"/>
          <div
            onClick={() => setOpen(!open)}
            className=" md:hidden "
          >
            {open? <MdOutlineClose />:<IoMenu />}
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
