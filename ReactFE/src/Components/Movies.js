import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setMovies} from '../redux/actions/moviesActions';
import MoviesCard from "./MoviesCard";

export function Movies() {
    const movies = useSelector((state) => state.allMovies.movies);
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    

    const getMoviesState = (fromWeek) =>{
        
        var selectedProps = fromWeek === true?'week':'day'
        console.log(selectedProps);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/trending/movie/${selectedProps}?api_key=a971131533ecd1f4d0cb562ab92a94ef`, requestOptions)
            .then(response => response.json())
            .then(data => {dispatch(setMovies(data.results))},)
            .catch(error => console.log('error', error));

    }
  
    useEffect(() => {
        getMoviesState(active);
         console.log(active);

    }, [dispatch])

    
    const handleClick = () => {
        setActive(! active);
    };

    let baseStyle={
        color:active ? 'black' :  'rgb(126, 190, 157)',
    }

    let baseStyle2 = {
                color:active ? 'rgb(126, 190, 157)': 'black',

    }


    const wrapperFunction = () => {
        handleClick();
        getMoviesState(false);
        
    }

    const wrapperFunction2 = () => {
        handleClick();
        getMoviesState(true);
        
    }

    return (
        <>
           <div className="rowHeader">
            <div className="timeContainer">
                <div className='title'> New Movies</div>
                <div className="toggle">
                    <button className="todayButton" onClick={wrapperFunction} style={{ backgroundColor: active ? "white" : "rgb(3, 37, 65)" , ...baseStyle}}>Today</button>
                    <button className="weekButton" onClick={wrapperFunction2} style={{ backgroundColor: active ? "rgb(	3, 37, 65)" : "white" ,...baseStyle2}}>This week</button>
                </div>
            </div>
        </div>
            <div className="mainDiv">
                {movies.map((item, index) =>(
                     <MoviesCard item={item} key={index}  />
                ))}
            </div>
        </> 

    );
}
