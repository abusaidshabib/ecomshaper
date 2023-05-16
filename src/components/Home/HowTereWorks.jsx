import React from "react";
import android from "../../assets/android.png";

const HowTereWorks = () => {
  return (
    <div className="px-20 text-center py-20 max-sm:px-1">
      <div className="grid place-content-center">
        <h1 className="text-3xl uppercase tracking-wider font-bold">
          How <span className="text-green-500">tere</span> Works
        </h1>
        <p className="w-96 pt-5">
          Download and install the tere app. Enter your phone number and make
          your user account. When approved you may start driving.
        </p>
      </div>
      <div className="grid grid-row-2 grid-flow-col gap-5 text-right items-center max-sm:grid-cols-1 max-sm:grid-flow-row">
        <div className="grid place-items-end row-span-1 max-sm:order-2 max-sm:place-items-center max-sm:text-center">
          <p className="grid place-content-center rounded-full w-16 h-16 border-8 border-green-500 text-2xl text-green-500">
            1
          </p>
          <p className="text-2xl font-semibold uppercase py-2">
            Request A ride
          </p>
          <p className="w-80 max-sm:w-full">
            Have to reach office or going for shopping? just pur your current
            location and destination and search a ride that suits you
          </p>
        </div>

        <div className="grid place-items-end row-span-1 max-sm:order-4 max-sm:place-items-center max-sm:text-center">
          <p className="grid place-content-center rounded-full w-16 h-16 border-8 border-green-500 text-2xl text-green-500">
            3
          </p>
          <p className="text-2xl font-semibold uppercase py-2">
            instant notifications
          </p>
          <p className="w-80 max-sm:w-full">
            get instant notification for your rides and be in contact with
            fellow riders all the time.
          </p>
        </div>

        <div className="grid place-content-center py-10 row-span-2 max-sm:order-1">
          <img className="w-80" src={android} alt="" />
        </div>

        <div className="grid place-items-start text-left max-sm:order-2 max-sm:place-items-center max-sm:text-center">
          <p className="grid place-content-center rounded-full w-16 h-16 border-8 border-green-500 text-2xl text-green-500">
            2
          </p>
          <p className="text-2xl font-semibold uppercase py-2">post a ride</p>
          <p className="w-80 max-sm:w-full">
            Going somewhere but hate to travel alone just port your ride details
            and publish it
          </p>
        </div>

        <div className="grid place-items-start text-left max-sm:order-5 max-sm:place-items-center max-sm:text-center">
          <p className="grid place-content-center rounded-full w-16 h-16 border-8 border-green-500 text-2xl text-green-500">
            4
          </p>
          <p className="text-2xl font-semibold uppercase py-2">
            cashless payment
          </p>
          <p className="w-80 max-sm:w-full">
            Payment made easy by using your own wallet - no more cash to carry
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTereWorks;
