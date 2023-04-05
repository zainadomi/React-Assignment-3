import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import SearchBar from "./SerachBar";
import SearchResultsCard from "./SearchResultsCard";


  
export function GetSearchData ({query}) {
   const [movies,setMovies] = useState();

   useEffect(()=> {
    if({query})return
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
    {movies?.map((item) =>{
             <SearchResultsCard item={item} />}
    )}
    </>
  );
  
   
};
  

