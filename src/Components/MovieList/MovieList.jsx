import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apikey, baseurl } from '../../Utility';
import './Movielist.css'
import { Link } from 'react-router-dom';

function MovieList() {
   
    const [trending,setTrending]=useState([])

    useEffect(() => {
      getBanner();
    }, []);
   
    const getBanner = async () => {
      
      const trendingResult = await axios.get(
        `${baseurl}/trending/all/week?api_key=${apikey}`
      );
      
      setTrending(trendingResult.data.results)
      
    };
  return (
    <div>
        <h1 className='text-2xl font-bold ml-2 my-3'>Trending</h1>
<div className="scroll ">
  <div className="whitespace-nowrap">
    {trending.map((elem) => (
      <div key={elem.id} className="transition-all duration-300 ease-in-out inline-block w-[100px] hover:p-1 h-[100px] sm:w-[150px] h-[200px]">
        <Link to={`/moviedetails/${elem.id}`}>
        <img className="w-full h-full " src={`https://image.tmdb.org/t/p/original/${elem.poster_path}`} alt="" />
        </Link>
      </div>
    ))}
  </div>
</div>


    </div>
  );
}

export default MovieList;