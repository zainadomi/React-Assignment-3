import React from 'react'

export default function searchResultsCard ({item}){
        return (
            <div className='moviePostContainer' key={item.id}>
            <img className='moviePoster' src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}></img>
            <div className='movieDescieption'>
                <h3>{item.original_title}</h3>
                <p className='releaseDate'>{item.release_date}</p>
                <p className='movieOverview'>{item.overview}</p>
                <button className="addToWatchList">ADD TO WATCHLIST</button>
            </div>
        </div>
        )
}