import React, { useEffect, useState } from 'react';
import './MovieDetail.css'
import { Link, useParams } from 'react-router-dom';
import { apikey, baseurl } from '../../Utility';
import axios from 'axios';
import Header from '../Header/Header';
function MovieDetail() {
    const { id } = useParams();
    const [movie,setMovie]=useState(null)
    const [getMovieVideoResult,setGetMovieVideoResult]=useState('')

    useEffect(()=>{
        getMovieDetails()
    },[])
    const getMovieDetails = async () => {

        

        const video = await axios.get(
            `${baseurl}/movie/${id}/videos?api_key=${apikey}`
          );

          console.log(video.data.results,'video');
          video.data.results.forEach(element => {
            if(element.type=="Trailer")
            {
                setGetMovieVideoResult(element.key)
                console.log(element.key,'key');
            }
          });
        
        const response = await axios.get(
          `${baseurl}/movie/${id}?api_key=${apikey}`
        );
            console.log(response.data);
            setMovie(response.data)
    
      };  
      
      return (
    <div className='main'>
        <Header/>
      <div className='mt-3 p-10'>


        <div className='font-bold text-3xl flex justify-between flex-wrap sm:justify-center'>{movie?.title}
        <Link to={`https://www.themoviedb.org/video/play?key=${getMovieVideoResult}`}>

        <div className='    sm:hidden p-1 text-sm sm:text-base md:text-xl rounded-lg bg-red-800 hover:bg-red-900 cursor-pointer mb-3'>Watch Trailer</div>
        </Link>
        </div>

<div className='sm:flex gap-2 sm:gap-10 justify-center sm:mt-10'>

<img className='sm:w-[200px]' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path }`} alt="" />
<div className='h-full sm:w-[400px]'>
    {movie?.overview}
    <Link to={`https://www.themoviedb.org/video/play?key=${getMovieVideoResult}`}>

    <div className='  hidden  sm:block w-fit p-1 text-sm sm:text-base md:text-xl rounded-lg bg-red-800 hover:bg-red-900 cursor-pointer mb-3'>Watch Trailer</div>
    </Link>
</div>
</div>
      </div>
    </div>
  );
}

export default MovieDetail;