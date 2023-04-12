import { NavBar } from "./NavBar";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToWatchList } from "../redux/actions/moviesActions";
import MoviesCard from "./MoviesCard";



const WatchList = ({item})=>{
    const [data, setData] = useState([])

    const watchListFunction =  () => {
        const usertoken = localStorage.getItem("token");
    
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${usertoken}`);
        myHeaders.append("Content-Type", "application/json");
    
        
    
        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
    
        fetch("http://localhost:1337/getMovies", requestOptions)
          .then((response) => response.json())
          .then((result) => setData(result.data))
          .catch((error) => console.log("error", error));

      };

      useEffect(()=>{
      watchListFunction();
      },[])

    return (
        <>
        <NavBar />
        <h1 className="watchListHeader">My Watchlist</h1>
        <div className="mainDiv">
                {data?.map((item) =>(
                     <MoviesCard item={{...item,id:item.movieId}} onDelete={watchListFunction} />
                ))}
            </div>
        </>
    )
}
export default WatchList;