import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import SearchBar from "./SerachBar";


  
export function GetSearchData ({query}) {
   const [movies,setMovies] = useState();

   useEffect(()=> {
    const getData = () => {
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };

      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=a971131533ecd1f4d0cb562ab92a94ef`, requestOptions)
          .then(response => response.json())
          .then(data => setMovies(data.results))
          .catch(error => console.log('error', error));
  }
  getData();

   },[query])

  return (
    <>
    <NavBar />
    <SearchBar />
    {movies?.map((item) =>
                <div className='moviePostContainer' key={item.id}>
                    <img className='moviePoster' src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}></img>
                    <div className='movieDescieption'>
                        <h3>{item.original_title}</h3>
                        <p className='releaseDate'>{item.release_date}</p>
                        <p className='movieOverview'>{item.overview}</p>
                    </div>
                </div>
            )}
    </>
  );
  
   
};
  

