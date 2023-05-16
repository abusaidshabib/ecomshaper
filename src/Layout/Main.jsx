import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Page/Shared/Headers';
import Footers from '../Page/Shared/Footers';

const Main = () => {
  return (
    <div>
      <Headers></Headers>
      <Outlet></Outlet>
      <Footers></Footers>
      
    </div>
  );
};

export default Main;