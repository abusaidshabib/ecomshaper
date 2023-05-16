import React, { useState } from "react";
import { MdLocationSearching } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";

const Headers = () => {
  const [status, setStatus] = useState(false);
  console.log(status);

  const active =
    "md:flex md:items-center md:w-auto md:py-0 md:opacity-100 md:pl-0 md:z-auto md:static z-1 absolute bg-white w-full left-0 py-4  pl-7 opacity-100 top-[80px] transition-all ease-in duration-500 text-center grid gap-3";

  const unActive =
    "md:flex md:items-center md:w-auto md:py-0 md:opacity-100 md:pl-0 md:z-auto md:static z-[-1]  absolute bg-white w-full left-0 py-4  pl-7 opacity-0 top-[-400px] transition-all ease-in duration-500 text-center grid gap-3";
  return (
    <div className="max-md:px-2 px-20 h-20 shadow md:flex md:items-center md:justify-between ">
      <div className="w-full h-full flex justify-between items-center">
        <p className="flex items-center">
          <MdLocationSearching className="text-green-500 text-3xl" />
          <span className="tracking-wider font-medium text-green-500 text-3xl">
            tere
          </span>
        </p>
        {status ? (
          <AiOutlineClose
            onClick={() => setStatus(false)}
            className="text-2xl cursor-pointer md:hidden block"
          />
        ) : (
          <FiMenu
            onClick={() => setStatus(true)}
            className="text-2xl cursor-pointer md:hidden block"
          />
        )}
        <ul className={status ? active : unActive}>
          <li>
            <Link className="pl-4" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="pl-4" to="/medicine">
              Medicine
            </Link>
          </li>
          <li>
            <Link className="pl-4" to="/post">
              Add Medicine
            </Link>
          </li>
          <li className="pl-4">
            <Link
              className="px-6 py-2 bg-green-400 text-white rounded-md"
              to="/"
            >
              Help Center
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
