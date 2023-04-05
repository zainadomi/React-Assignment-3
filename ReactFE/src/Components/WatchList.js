import { NavBar } from "./NavBar";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToWatchList } from "../redux/actions/moviesActions";
import MoviesCard from "./MoviesCard";



const WatchList = ()=>{
    const [data, setData] = useState([])

    useEffect(() => {
       fetch("http://localhost:1337/getMovies",{
        method:'GET',
       })
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data,'allMovies')
        setData(data.data);
       })
    }, []);

    return (
        <>
        <NavBar />
        <h1 className="watchListHeader">My Watchlist</h1>
        <div className="mainDiv">
                {data.map((item   ) =>(
                     <MoviesCard item={item} />
                ))}
            </div>
        </>
    )
}
export default WatchList;