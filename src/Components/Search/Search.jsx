import React from 'react';
import Header from '../Header/Header';
import './Search.css'

function Search() {
  return (
    <>
    <Header/>

    <div className='search-body min-h-full bg-red-200' >
            <div className="flex items-center">
          <div className="relative">
            <input type="text" placeholder="Search" className="bg-gray-900 text-white py-2 pl-6 pr-10 rounded-full focus:outline-none" />
           
          </div>
          
        </div>
    </div>

    </>
  );
}

export default Search;