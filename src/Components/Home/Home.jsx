import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { apikey, baseurl } from "../../Utility";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

function Home() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    getBanner();
  }, []);
  console.log(banner?.original_title, "fdgfdgf");

  const getBanner = async () => {
    let length;
    const response = await axios.get(
      `${baseurl}/trending/all/week?api_key=${apikey}`
    );
    length = response.data.results.length;
    const randomIndex = Math.floor(Math.random() * length);
    setBanner(response.data.results[randomIndex]);
  };

  return (
    <div className="main">
      <Header />
      <div className="relative bg-black sm:h-[500px]">
        <img
          className="w-full h-full"
          src={`https://image.tmdb.org/t/p/original/${banner?.backdrop_path}`}
          alt=""
        />
        <div
          className="bg-gradient-to-t from-blue-900 via-transparent to-transparent w-full h-1/2 flex flex-col justify-end
  absolute bottom-0 left-0  text-white p-2 text-[10px] sm:text-[15px]"
        >
          <div className="font-bold text-xl md:text-3xl">
            {banner?.original_title}
          </div>
          {banner?.overview}
        </div>
      </div>
      <MovieList/>
    </div>
  );
}

export default Home;
