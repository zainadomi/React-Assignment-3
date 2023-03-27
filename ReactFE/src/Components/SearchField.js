import React from 'react';
import {useNavigate} from 'react-router-dom';



export function SearchField ({setQuery}){
  const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/search');
      }


    return (
        <form onSubmit={handleSubmit} >
        <div className="search">
             <input className="searchField"
              type='text'
              onChange  ={(e) => setQuery(e.target.value)}
              placeholder="Search for a movie, tv show, person......" >
            </input>
            <button type='submit'  className="searchButton" onClick={()=>{
              navigate('search');
            }} >Search</button>
        </div>
        </form> 
    )
}


