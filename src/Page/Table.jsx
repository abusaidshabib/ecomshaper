import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [medicine, setMedicine] = useState();

  useEffect(() => {
    fetch("https://api-abusaidshabib.vercel.app/medicine")
      .then((res) => res.json())
      .then((data) => setMedicine(data.data));
  }, []);

  console.log(medicine);

  return (
    <div className="relative overflow-x-auto w-full bg-secondary-700 rounded-md p-20">
      <table className="table-auto text-left w-full text-neural-400 ">
        <thead className="text-base tracking-widest text-gray-700 uppercase bg-secondary-600">
          <tr className="border-x-secondary-500 p-5 text-center">
            <th className="px-6 py-3 font-medium">S.N.</th>
            <th className="px-6 py-3 font-medium">Medicine Info</th>
            <th className="px-6 py-3 font-medium">ExpireDate</th>
            <th className="px-6 py-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {medicine?.map((product, index) => (
            <tr key={product._id} className="border-b hover:bg-secondary-500">
              <td className="px-6 py-3 font-normal">{index + 1}</td>
              <td className="px-6 py-3 font-normal">
                <p>
                  <b>Brand Name: </b>
                  {product?.brand}
                </p>
                <p>
                  <b>Generic Name: </b>
                  {product?.generic}
                </p>
                <p>
                  <b>Use For: </b>
                  {product?.useFor}
                </p>
                <p>
                  <b>Strength: </b>
                  {product?.strength.split("/")[0]}
                </p>
                <p>
                  <b>Manufacturer: </b>
                  {product?.manufacturer}
                </p>
              </td>

              <td className="px-6 py-3 font-normal text-center">
                {product?.lastdate}
              </td>
              <td className="flex items-center justify-center h-60 text-center">
                <Link
                  to={`/update/${product?._id}`}
                  className="bg-blue-700 text-white px-5 py-2 rounded-md uppercase tracking-wider font-semibold"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
