import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/HeroSection/Hero';
import InfoSection from '../components/InfoSection/InfoSection';
import { aboutObj, discoverObj, projectsObj, teamObj } from '../components/InfoSection/Data';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

const Home = () => {

  // TODO: Naming
  const [isSideNavBar, setIsSideNavBar] = useState(false);

  // TODO: Naming
  const toggleShowSideBar = () => {
    setIsSideNavBar(!isSideNavBar)
  };

  return (
    <>
      <Sidebar isOpen={isSideNavBar} toggle={toggleShowSideBar} />
      <Navbar toggle={toggleShowSideBar} />
      <Hero />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
      <Services />
      <InfoSection {...projectsObj} />
      <InfoSection {...teamObj} />
      <Footer />
    </>
  )
}

export default Home;
