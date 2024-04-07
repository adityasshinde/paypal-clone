import React from "react";
import { Link } from "react-router-dom";
import paypalLogo from '../../images/paypal.svg';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Section 1 */}
      <div className="flex flex-wrap items-center space-x-4 font-medium py-4  mx-auto px-4 sm:px-6 md:px-44">
        <Link to="/" className="text-sm mr-2 md:mr-8">
          <img src={paypalLogo} alt="Paypal Logo" className="w-28" />
        </Link>
        <div className="flex items-center space-x-4">
        <Link to="/help" className="text-sm">Help</Link>
        <Link to="/contact-us" className="text-sm">Contact Us</Link>
        <Link to="/security" className="text-sm">Security</Link>
        <Link to="/fees" className="text-sm">Fees</Link>
        </div>
      </div>
      {/* Horizontal Divider */}
      <hr className="w-[100vw] border-2 border-gray-200" />
      {/* Section 2 */}
      <div className="flex py-8 flex-wrap items-center justify-start md:items-center mx-auto px-4 sm:px-6 md:px-44 ">
        <p className="text-sm text-gray-500 my-2 mr-2 md:mr-4">© 1999-2022 PayPal, Inc. All rights reserved.</p>
        <div className="flex items-center space-x-4 my-2">
        <Link to="/privacy" className="text-sm font-medium">Privacy</Link>
        <Link to="/legal" className="text-sm font-medium">Legal</Link>
        <Link to="/policy-updates" className="text-sm font-medium">Policy Updates</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
