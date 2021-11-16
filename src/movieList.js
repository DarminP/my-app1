//code used from https://www.freecodecamp.org/news/react-movie-app-tutorial/

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//pass in a list of movies as props
const MovieList = (props) => {
    return (

        // using the map function to loop over these movies 
        // and For each movie we'll display an image using the Poster URL as the image source
        <div>
        {props.movies.map((movie, index) => (
            <div className='image-container justify-content-start m-3 d-inline-flex'>
            <img src={movie.Poster} alt="movie"></img>
            </div>
        ))}
        </div>
    );
};

export default MovieList;