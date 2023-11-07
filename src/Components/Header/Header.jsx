import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const Navigate = useNavigate()
  return (
    <div className="bg-red-300 text-white font-sans items-center ">
    {/* Navigation Bar */}
    <nav className="bg-black p-4  items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <Link to="/">
          
          <div className='text-red-700 font-bold sm:text-3xl cursor-pointer'>MOVIE BAZAR</div>
        </Link>
        </div>
        <div className='flex gap-2 md:text-xl md:gap-6 cursor-pointer'>

       
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        </div>

    
      </div>
    </nav>
    {/* Content goes here */}
  </div>
  );
}

export default Header;