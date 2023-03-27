import { useState, useEffect } from 'react';

const SearchBar = () => {
    const [searchInput, setSearch] = useState([]);
    const [d, setD] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
        getData();
    }

    const getData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${d}&api_key=a971131533ecd1f4d0cb562ab92a94ef`, requestOptions)
            .then(response => response.json())
            .then(searchInput => setSearch(searchInput.results))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getData();
        // our fetch codes
    }, [])

    console.log(searchInput)

    return (
        <>

            <div className="searchBar">
                <form onSubmit={handleSubmit} >
                    <input className="searchBarInput" type='search' value={d} onChange={(e) => setD(e.target.value)} placeholder="Search for a movie, tv show, person......">
                    </input> 
                </form>
            </div> 

                {searchInput.map((item) =>
                    <div className='moviePostContainer' key={item.id}>
                        <img className='moviePoster' src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}></img>
                        <div className='movieDescieption'>
                            <h3>{item.original_title}</h3>
                            <p className='releaseDate'>{item.release_date}</p>
                            <p className='movieOverview'>{item.overview}</p>
                        </div>
                    </div>
                )}


        </>

    );
}

export default SearchBar;