import React from "react";
import speed from "../../assets/speed.png";
import cash from "../../assets/cash.png";
import computer from "../../assets/computer.png";

const TereBenefits = () => {
  return (
    <div className="p-20 max-sm:p-1">
      <h1 className="text-3xl uppercase tracking-wider font-bold text-center pb-10">
        <span className="text-green-500">tere</span> benefits
      </h1>
      <div className="grid gap-10">
        <div className="grid grid-rows-2 grid-flow-col bg-white w-11/12 items-center p-10 max-sm:grid-flow-row max-sm:grid-cols-1 max-sm:w-full">
          <p className="flex row-span-1 max-sm:order-1 max-sm:justify-center">
            <span className="text-5xl text-green-500">01.</span>
            <span className="text-xl w-40 pl-3 pb-2 max-sm:">
              Flexible working hours
            </span>
          </p>
          <p className="row-span-1 w-72 max-sm:order-3 max-sm:text-center py-4 max-sm:w-full">
            You can decide when, and how much time you want to drive.
          </p>
          <div className="row-span-2 grid place-content-end max-sm:order-2 max-sm:place-content-center">
            <img className="h-32 max-sm:h-60" src={speed} alt="" />
          </div>
        </div>

        <div className="grid grid-rows-2 grid-flow-col bg-white ml-24 items-center p-10 max-sm:ml-0 max-sm:grid-cols-1 max-sm:grid-flow-row">
          <div className="row-span-2 grid place-content-start max-sm:place-content-center max-sm:order-2">
            <img className="h-32 max-sm:h-48" src={cash} alt="" />
          </div>
          <p className="flex row-span-1 justify-end items-center max-sm:order-1 max-sm:justify-center">
            <span className="text-5xl text-green-500 max-sm:text-7xl">02.</span>
            <span className="text-xl w-40 pl-3 pb-2">Earnings</span>
          </p>
          <span className="w-full grid place-content-end max-sm:order-3 max-sm:place-content-center">
            <p className="row-span-1 w-56 text-left max-sm:text-center max-sm:w-full">
              By driving with tere you can earn more.
            </p>
          </span>
        </div>

        <div className="grid grid-rows-2 grid-flow-col bg-white w-11/12 items-center p-10 max-sm:grid-flow-row max-sm:grid-cols-1 max-sm:w-full">
          <p className="flex row-span-1 max-sm:order-1 max-sm:justify-center">
            <span className="text-5xl text-green-500">03.</span>
            <span className="text-xl w-40 pl-3 pb-2">
              Customer support 24/7
            </span>
          </p>
          <p className="row-span-1 w-72 max-sm:order-3 max-sm:text-center py-4 max-sm:w-full">
            Tere is a local service provider and we are proud to support you in
            your local language. We are proud to be at your service 24/7!
          </p>
          <div className="row-span-2 grid place-content-end max-sm:order-2 max-sm:place-content-center">
            <img className="h-32 max-sm:h-60" src={computer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TereBenefits;
