import React from "react";
import ListItem from "../components/page-components/ListItem";
import { FaBell, FaFileInvoice, FaPaypal, FaTruck } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";
import OptionItem from "../components/page-components/OptionItems";
import Header from "../components/page-components/Header";

const Page = () => {
  return (
    <div className="bg-gray-100 mt-20 min-h-screen">
      <Header/>
      {/* Seller Tools Section */}
      <div className="w-full py-12 mx-auto px-4 sm:px-6 md:px-44">
        <h2 className="text-4xl text-left font-medium text-gray-800 mb-2">Seller Tools</h2>
        <p className="text-md text-gray-600 mb-4 text-left">Sell online easily and grow your business with seller tools. Create PayPal<br /> buttons, get instant payment notifications, and do much more.</p>
        {/* Add more content here */}
        <div className="mx-4 py-8 w-auto md:[75%] lg:w-[60%]">
          <h2 className="text-2xl text-left font-medium text-gray-800 mb-1">Selling online</h2>
          <p className="text-sm text-gray-600 mb-8 text-left">Grow your business by making it easier for your customers to pay you.</p>
          <ListItem icon={<FaPaypal color="#023178" size={24} />} button='Manage' heading="Paypal buttons" subtitle='Create and manage secure buttons for your customers to add items to their cart, buy, donate, or subscribe.' />
          <ListItem icon={<IoIosLaptop color="gray" size={24} />} button='Update' heading="Website preferences" subtitle='Control how you sell online by turning on express checkouts and bringing customers back to your website after they pay with PayPal.' />
          <ListItem icon={<FaBell color="#21acfc" size={24} style={{transform: "rotate(-20deg)"}} />} button='Update' heading="Instant payment notifications" subtitle='Stay informed by turning on notifications for payments made on your website.' />
          {/* Add more content here */}
        </div>
        <div className="w-auto mx-4 py-8 md:[75%] lg:w-[60%]">
          <h2 className="text-2xl text-left font-medium text-gray-800 mb-1">Getting paid</h2>
          <p className="text-sm text-gray-600 mb-8 text-left">Choose from various payment tools to attract your customers.</p>
          <ListItem icon={<FaFileInvoice color="#21acfc" size={24} />} button='Manage' heading="Invoices" subtitle='Create professional invoices and customize it as per your requirements.' />
          {/* Add more content here */}
        </div>
        <div className="w-auto mx-4 py-8 md:[75%] lg:w-[60%]">
          <h2 className="text-2xl text-left font-medium text-gray-800 mb-1">More selling tools</h2>
          <p className="text-sm text-gray-600 mb-8 text-left">Checout out the other tools that we have for you to help you sell online.</p>
          <ListItem icon={<FaTruck color="#21acfc" size={24} />} button='Create' heading="Shipping preferences" subtitle='Create your shipping labels for hussle-free returns.' />
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
};



export default Page;
