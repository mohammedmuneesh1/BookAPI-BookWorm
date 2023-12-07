// Home.js
import React from 'react';
import { Contact } from '../Components/Header/Contact';
import { Navbar } from '../Components/Header/Navbar';
import { Banner } from '../Components/Body/Banner';
import { Featured } from '../Components/Body/Feature';

export const Home = () => {
  return (
    <>
        <Contact />
        <Navbar /> 
        <Banner />
      <Featured/>

    </>
  );
};