import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">View the Web page designs</h1>
        <div className="flex justify-between">
          <Link to="/page1" className="w-1/2 mx-2 py-2 rounded-lg border-2 border-blue-500 text-blue-500 text-center hover:bg-blue-100">Page 1</Link>
          <Link to="/page2" className="w-1/2 mx-2 py-2 rounded-lg border-2 border-blue-500 text-blue-500 text-center hover:bg-blue-100">Page 2</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;