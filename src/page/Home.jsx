// Home.js
import React, { useState } from 'react'
import { Contact } from '../Components/Header/Contact'
import { Navbar } from '../Components/Header/Navbar'
import { Banner } from '../Components/Body/Banner'
import { Featured } from '../Components/Body/Feature'
import { Popular } from '../Components/Body/Popular'
import { Subscribe } from '../Components/Footer/Subscribe'
import { Footer } from '../Components/Footer/Footer'
import { SearchResult } from '../Components/Body/searchResult'
// import { Trail } from '../Components/Footer/Trail';

export const Home = () => {
  const [showSearchComponent,setShowSearchComponent] = useState(false);
  const [searchData,setSearchData] = useState([]);

  const handleSearchResult = (searchBoolean)=>{
    setShowSearchComponent(searchBoolean)
  }

  const fnSearchData = (data)=>{
    setSearchData(data)
  }


  return (
    <>
      <Contact />
      <Navbar />
      <Banner onSearch = {handleSearchResult} onsearchData={fnSearchData} />
      {showSearchComponent?<SearchResult data = {searchData} />:null}
      <Featured />
      <Popular />
      <Subscribe />
      <Footer />
    </>
  )
}
