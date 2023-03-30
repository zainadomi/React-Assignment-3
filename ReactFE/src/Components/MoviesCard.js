import React from 'react'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {addMovieToWatchList} from "../redux/actions/moviesActions"
import { useDispatch, useSelector } from "react-redux";
import { watchListReducer } from '../redux/reducers/movieReducer';


export default function MoviesCard({item}) {
    const {addMovieToWatchList} = useSelector(watchListReducer);
    
    const navigate = useNavigate();
 
  return (
    <div className="postContainer" key={item.id}>
                        <Link to={`/details/${item.id}`}>
                            <img className="posterImage" src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                        </Link>

                        <div className="movieDescreption">
                            <h4 className="movieTitle">{item.title}</h4>
                            <p className="pubDate">{item.release_date.substring(0,4)}</p>
                            <button className="addToWatchList" onClick={() => {
                                navigate('watchList');
                            }} >ADD TO WATCHLIST</button>

                        </div>
                    </div>
  )
}
