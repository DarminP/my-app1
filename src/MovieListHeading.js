//code used from https://www.freecodecamp.org/news/react-movie-app-tutorial/
import React from "react";

const MovieListHeading = (props) => {
    return (
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    );
};
export default MovieListHeading;