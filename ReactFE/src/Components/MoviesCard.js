import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom';


export default function MoviesCard({ item,onDelete }) {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const location = useLocation()



  // add movie to watchList function

  const watchListFunction = async () => {
    const usertoken = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${usertoken}`);
    myHeaders.append("Content-Type", "application/json");

    
var raw = JSON.stringify({
    "poster_path": item.poster_path,
    "title": item.title,
    "release_date": item.release_date,
    "movieId": item.id
  });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:1337/api/watchlist", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // delete function

  const handleDeleteClick = async () => {
    const usertoken = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${usertoken}`);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };

      
      
      fetch(`http://localhost:1337/api/deleteMovie/${item.id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        .finally(()=>{
            if(
                typeof onDelete === 'function'
            ){
                onDelete()
            }
        })

  };



  return (
    <div className="postContainer" key={item.id}>
      <Link to={`/details/${item.id}`}>
        <img
          className="posterImage"
          src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
        />
      </Link>

      <div className="movieDescreption" >
        <h4 className="movieTitle">{item.title}</h4>
        <p className="pubDate">{item.release_date.substring(0, 4)}</p>
        <button className="addToWatchList" onClick={watchListFunction}>
          ADD TO WATCHLIST
        </button>
        {location.pathname =="/watchList" && 
                <button className="addToWatchList" onClick={handleDeleteClick} disabled={isDeleting}>
                {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
            }
      
      </div>
    </div>
  );
}