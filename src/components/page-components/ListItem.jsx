import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ icon, heading, subtitle, button,link }) => {
  return (
    <div className="border my-2 border-gray-300 rounded-md p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <span className="p-2 bg-gray-200 rounded-full">{icon}</span>
        <div>
          <h3 className="text-md text-left font-medium">{heading}</h3>
          <p className="text-gray-600 text-sm font-sm text-left">{subtitle}</p>
        </div>
      </div>
      <Link to={link} className="text-blue-500 mx-2 hover:underline text-sm font-medium">{button}</Link>
    </div>
  );
};

export default ListItem;
