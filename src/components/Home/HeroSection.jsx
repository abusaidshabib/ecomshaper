import React from "react";
import { Link } from "react-router-dom";
import { FaAppStoreIos, FaStore } from "react-icons/fa";
import hero  from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 px-20 items-center min-w-screen gap-20 pb-20 max-sm:grid-cols-1 max-sm:px-1">
      <div className="col-span-1 max-sm:order-2 max-sm:text-center">
        <h1 className="uppercase text-4xl font-bold">
          Download app, save money, make friends
        </h1>
        <p className="py-5">
          Its simple and its free. Play your part in reducing Carbon Footprint
          and help Mother Nature to sustain its beauty. So what are you waiting
          for? <br />
          Let's ride together
        </p>
        <div className="grid grid-cols-2 gap-5 text-center">
          <Link className="col-span-1 bg-black rounded-md py-3 text-white text-xl uppercase tracking-wider font-semibold flex items-center justify-center">
            <FaAppStoreIos className="text-white text-2xl mr-1" />
            <p className="ml-1">Download</p>
          </Link>
          <Link className="col-span-1 bg-black rounded-md py-3 text-white text-xl uppercase tracking-wider font-semibold flex items-center justify-center">
            <FaStore className="text-white text-2xl mr-1" />
            <p className="ml-1">Download</p>
          </Link>
        </div>
      </div>
      <div className="col-span-1 grid place-items-center max-sm:order-1 py-5">
        <img className="" src={hero} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
