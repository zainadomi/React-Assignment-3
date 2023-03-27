import { NavBar } from "./NavBar";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedMovie } from "../redux/actions/moviesActions";


const MovieDetails = () => {
    const { movieId } = useParams();
    const movie = useSelector((state) => state.movie);
    const dispatch = useDispatch();


    const getDetails = () => {

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a971131533ecd1f4d0cb562ab92a94ef&language=en-US
        `)
            .then(response => response.json())
            .then(data => { dispatch(selectedMovie(data)) },)
            .catch(error => console.log('error', error));

    }

    useEffect(() => {
        getDetails()
    }, [dispatch]);
  

    return (
        <>
            <NavBar />
            <div className="mainMovieDetailsContainer">
                <img className="backgroundImg"></img>
                <div className="rowMovieDetails">
                    <img className="moviePosterImg" src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''></img>
                    <div>
                        <h1 className="movieName">{movie.original_title}</h1>
                        <div className="movieTypeAndReleaseDate">
                            <p></p>
                        </div>
                        <div className="popularity">{movie.vote_average}</div>
                        <p className="tagline">Tagline</p>
                        <div>
                            <h3 className="movieOverviewTitle">Overview</h3>
                            <div className="movieOverviewDescription">{movie.overview}</div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );

}


export default MovieDetails;