// Home.js
import React from 'react';
import { Contact } from '../Components/Header/Contact';
import { Navbar } from '../Components/Header/Navbar';
import { Banner } from '../Components/Body/Banner';
import { Featured } from '../Components/Body/Feature';
import { Popular } from '../Components/Body/Popular';
import { Subscribe } from '../Components/Footer/Subscribe';
import { Footer } from '../Components/Footer/Footer';
import { Trail } from '../Components/Footer/Trail';

export const Home = () => {
  return (
    <>
        <Contact />
        <Navbar /> 
        <Banner />
      <Featured/>
      <Popular/>
      <Subscribe/>
      <Footer/>

    </>
  );
};