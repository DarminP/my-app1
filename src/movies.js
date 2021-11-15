import React, { useState, useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./movieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1d63e556`; 

        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    },[searchValue]);
     
    
    return (
        <div>
            <div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
            <MovieList movies={movies}/>
            </div>
        </div>
    );
};
export default Movies;