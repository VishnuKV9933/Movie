import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Search.css";
import axios from "axios";
import { apikey, baseurl } from "../../Utility";
import { Link } from "react-router-dom";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResuls, setSearchResults] = useState([]);
  const [displayResult, setDisplayResult] = useState([]);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(searchResuls?.length / 7);

  useEffect(() => {
    const startIndex = (currentPage - 1) * 7;
    const endIndex = startIndex + 7;
    const data = searchResuls.slice(startIndex, endIndex);
    setDisplayResult(data);
  }, [currentPage, searchResuls]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  function next() {
    if (currentPage === totalPage) return;
    handlePageChange(currentPage + 1);
  }

  function previous() {
    if (currentPage === 1) return;
    handlePageChange(currentPage - 1);
  }

  const search = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(
        `${baseurl}/search/movie?api_key=${apikey}&query=${searchText}`
      );
      if (response.data.results.length < 1) {
        setMessage("No data available");
        setTimeout(() => {
          setMessage("");
          setSearchText("");
        }, 2000);
        return;
      }
      setSearchResults(response.data.results);
      setSearchText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="search-body min-h-full bg-black">
        <Header />
        <form
          onSubmit={search}
          className="flex items-center gap-1 md:gap-4 justify-center sm:mb-10"
        >
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

        <div className=" flex justify-center text-red-600">{message}</div>

        {/* movie list */}
        <div className="sm:flex sm:flex-wrap sm:gap-6  justify-center ">
          {displayResult.map((elem) => {
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
          <div></div>
        </div>

        {/* next and previous */}
        {
          (searchResuls.length>0) && <>
           <div className="w-full flex gap-[100px] justify-center mt-5 bg-black ">
          <div
            className="text-white p-1 bg-red-500 rounded-lg mb-5 cursor-pointer"
            onClick={previous}
          >
            Prev
          </div>
          <div
            className="text-white p-1 bg-red-500 rounded-lg mb-5 cursor-pointer"
            onClick={next}
          >
            Next
          </div>
        </div>
          </>
        }
        {/* next and previous end */}
        
       
        {/* movie list end */}
      </div>
    </>
  );
}

export default Search;
