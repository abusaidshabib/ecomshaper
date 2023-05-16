import React from 'react';

const ApplyToDrive = () => {
  return (
    <div className="px-20 max-sm:px-1">
      <div className="w-full bg-green-500 grid gap-5 grid-cols-3 items-center p-8 rounded-md max-sm:grid-cols-1">
        <p className="col-span-1 text-xl text-white">
          Let's go. Get a link to download the app.
        </p>
        <input
          className="p-3 col-span-1 outline-none rounded-md"
          type="text"
          placeholder="Enter mobile phone number"
        />
        <input
          className="col-span-1 bg-black rounded-md py-3 text-white text-xl uppercase tracking-wider font-semibold"
          type="submit"
          value="Apply To Drive"
        />
      </div>
    </div>
  );
};

export default ApplyToDrive;