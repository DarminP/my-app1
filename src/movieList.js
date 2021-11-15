import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
    return (
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