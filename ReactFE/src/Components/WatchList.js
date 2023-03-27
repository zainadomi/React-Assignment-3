import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const WatchList = ()=>{
    const [moviesList, setMoviesList] = useState({});
    const {movieId} = useParams();

    useEffect(() => {
        getMoviesList()
    })

    const getMoviesList = () => {


        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a971131533ecd1f4d0cb562ab92a94ef&language=en-US
        `)
            .then(response => response.json())
            .then(data => setMoviesList(data))
            .catch(error => console.log('error', error));

    }

    return (
        <>
        <NavBar />
        <div className="mainMovieDetailsContainer">
            <img className="backgroundImg"></img>
            <div className="rowMovieDetails">
                <img className="moviePosterImg" src={`http://image.tmdb.org/t/p/w500/${moviesList.poster_path}`} alt=''></img>
                <div>
                    <h1 className="movieName">{moviesList.original_title}</h1>
                    <div className="movieTypeAndReleaseDate">
                        <p></p>  
                    </div>
                    <div className="popularity">{moviesList.vote_average}</div>
                    <p className="tagline">Tagline</p>
                    <div>
                        <h3 className="movieOverviewTitle">Overview</h3>
                        <p className="movieOverviewDescription">{moviesList.overview}</p>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}
export default WatchList;