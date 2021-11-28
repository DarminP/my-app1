//code used from https://www.freecodecamp.org/news/react-movie-app-tutorial/

import React, { useState, useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./movieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    //We're adding a state value to store what the user types
    const [searchValue, setSearchValue] = useState('');

    //creating a function that calls the API. This uses the Fetch API method
    //and  accept a parameter: searchValue 
    
    const getMovieRequest = async (searchValue) => {

        //We're passing this value to the request using a template string
        const url = ´http://www.omdbapi.com/?s=${searchValue}&apikey=1d63e556´; 

        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };
    // we are using useEffect to make sure the API call only happens... 
    // when the app loads for the first time!
    //we are also We're updating the useEffect hook to run whenever the "searchValue" changes!
    //When the useEffect hooks runs, it passes the new searchValue to our getMovieRequest function
    useEffect(() => {
        getMovieRequest(searchValue);
    },[searchValue]);
     
    
    return (
       
            <div className='container-fluid movie-app'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
				    <MovieListHeading heading='Movies' />

                    {/*we're passing the searchValue value 
                    and the setSearchValue function to the SearchBox componen*/}
				    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			    </div>
            
            {/*rendering the MovieList and passing the movies we stored in state as props*/}
            <div className='row'>
                <MovieList movies={movies}/>
            </div>
            </div>
        
    );
};
export default Movies;
