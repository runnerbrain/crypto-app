import React from 'react';
import { LogoIcon } from '../icons/icons';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div className="flex items-center gap-1 cursor-pointer">
          <LogoIcon />
          <p>
            <span className="text-green-400">C</span>
            <span>rypto</span>
            <span className="text-green-400">T</span>
            <span>racker</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
