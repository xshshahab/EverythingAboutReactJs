import React, { useState } from 'react'

const MovieComp = () => {
    const [movie, setMovie] = useState({
        title: "The Dark Knight",
        rating: 8.3
    });

    const handleUpdate = () => {

        // const copyMovie = {
        //     ...movie, rating: 9.0
        // }
        // setMovie(copyMovie);

        setMovie({ ...movie, rating: 9.0 })
    }


    return (
        <div>
            <h1>Movie Name : {movie.title}</h1>
            <h3>Rating : {movie.rating}</h3>

            <button className='btn' onClick={handleUpdate}>UpgradeRating</button>
        </div>
    )
}

export default MovieComp