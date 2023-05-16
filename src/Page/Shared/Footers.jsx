import React from "react";
import { FaAppStoreIos, FaStore } from "react-icons/fa";
import { MdLocationSearching } from "react-icons/md";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <div className="p-20 grid grid-cols-4 max-sm:p-10 max-sm:grid-cols-1 max-sm:text-center max-sm:gap-5">
      <p className="flex items-center max-sm:place-content-center">
        <MdLocationSearching className="text-3xl" />
        <span className="tracking-wider font-medium text-3xl">tere</span>
      </p>
      <div className="grid gap-3 max-sm:place-content-center max-sm:order-3">
        <p className="text-2xl font-semibold">Be Our Friend</p>
        <p>3, Season Park, Jakarta</p>
        <p>support@foodyar.co,id</p>
        <p>021-1111-2222</p>
      </div>
      <div className="grid gap-3 max-sm:place-content-center max-sm:order-4">
        <p className="text-2xl font-semibold">Be Our Friend</p>
        <p>3, Season Park, Jakarta</p>
        <p>support@foodyar.co,id</p>
        <p>021-1111-2222</p>
      </div>
      <div className="grid place-content-center max-sm:place-content-center max-sm:order-2">
        <div className="grid grid-cols-2 gap-2 text-center">
          <Link className="col-span-1 bg-black rounded-md py-3 px-5 text-white uppercase tracking-wider font-semibold flex items-center justify-center">
            <FaAppStoreIos className="text-white text-2xl mr-1" />
            <p className="ml-1">Download</p>
          </Link>
          <Link className="col-span-1 bg-black rounded-md py-3 px-5 text-white uppercase tracking-wider font-semibold flex items-center justify-center">
            <FaStore className="text-white text-2xl mr-1" />
            <p className="ml-1">Download</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footers;
