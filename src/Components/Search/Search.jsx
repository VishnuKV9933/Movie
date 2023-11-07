import React, { useState } from "react";
import Header from "../Header/Header";
import "./Search.css";
import axios from "axios";
import { apikey, baseurl } from "../../Utility";
import { Link } from "react-router-dom";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResuls, setSearchResults] = useState([]);

  const search = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `${baseurl}/search/movie?api_key=${apikey}&query=${searchText}`
    );
    setSearchResults(response.data.results);
    setSearchText('')

  };

  return (
    <>
      <div className="search-body min-h-full bg-black">
        <Header />
        <form onSubmit={search} className="flex items-center gap-1 md:gap-4 justify-center sm:mb-10">
          <div className="relative md:w-1/2">
            <input
            value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              type="text"
              placeholder="Search"
              className="bg-gray-900 text-white py-2 pl-6 pr-10 rounded-full focus:outline-none w-full "
            />
          </div>
          {/* search button */}
          <div
            onClick={search}
            className="bg-red-800 text-white p-2 rounded-lg hover:bg-red-900 cursor-pointer"
          >
            Search
          </div>
        </form>

        
        {/* movie list */}
        <div className="sm:flex sm:flex-wrap sm:gap-6  justify-center ">
          {searchResuls.map((elem) => {
            return (
              <div key={elem.id}>
                <div className="w-full my-1  p-10 sm:p-2  sm:w-[400px] lg:w-[300px] gap-2">
                  <Link to={`/moviedetails/${elem.id}`}>

                  <img
                    className="sm:w-[100px] sm:h-[150px] "
                    src={`https://image.tmdb.org/t/p/original/${elem.poster_path}`}
                    alt="img "
                  />
                  </Link>
                  <div className="text-white font-bold text-xl">
                    {elem.original_title}
                  </div>
                  {console.log(elem)}
                </div>
              </div>
            );
          })}
        </div>
        {/* movie list end */}
      </div>
    </>
  );
}

export default Search;
