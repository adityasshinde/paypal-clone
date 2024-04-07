import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconBell, IconMenu2, IconSettings, IconX } from '@tabler/icons';
import paypalLogo from '../../images/paypal-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#023178] py-4 w-full fixed top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 md:px-44">
        <div className="flex items-center justify-between h-12">
            <div className="hidden md:flex items-center justify-start space-x-4">
              <Link to="/">
                <img src={paypalLogo} alt="Paypal Logo" className="h-10 w-10" />
              </Link>
              <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm ">
                Dashboard
              </Link>
              <Link to="/finances" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm ">
                Finances
              </Link>
              <Link to="/send-request" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm ">
                Send and Request
              </Link>
              <Link to="/deals" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm ">
                Deals
              </Link>
              <Link to="/wallet" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm ">
                Wallet
              </Link>
              <Link to="/activity" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm ">
                Activity
              </Link>
              <Link to="/help" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm ">
                Help
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                {isOpen ? (
                  <IconX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <IconMenu2 color={'white'} className="h-6 w-6" aria-hidden="true"  />
                )}
              </button>
            </div>
            <div className="flex items-center md:ml-auto">
              <IconBell size={28} color={'#023178'} fill={'white'} className='cursor-pointer' />
              <IconSettings size={28} fill={'white'} color={'#023178'} className='ml-4 cursor-pointer' />
              <Link to="/logout" className="text-white hover:text-gray-300 ml-4 font-medium text-sm">
                LOG OUT
              </Link>
            </div>
        </div>
      </div>

      <div className={ `${isOpen ? "block" : "hidden"} md:hidden `}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base ">
            Dashboard
          </Link>
          <Link to="/finances" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base ">
            Finances
          </Link>
          <Link to="/send-request" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base ">
            Send and Request
          </Link>
          <Link to="/deals" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base ">
            Deals
          </Link>
          <Link to="/wallet" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base ">
            Wallet
          </Link>
          <Link to="/activity" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base ">
            Activity
          </Link>
          <Link to="/help" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base ">
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
