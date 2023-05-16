import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ApplyToDrive from '../components/Home/ApplyToDrive';
import HowTereWorks from '../components/Home/HowTereWorks';
import TereBenefits from '../components/Home/TereBenefits';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <HeroSection></HeroSection>
      <ApplyToDrive></ApplyToDrive>
      <HowTereWorks></HowTereWorks>
      <TereBenefits></TereBenefits>
    </div>
  );
};

export default Home;