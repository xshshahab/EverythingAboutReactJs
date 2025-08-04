import React, { useState } from 'react'

const MoviesVerse = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Spider Man", ratings: 5 },
        { id: 2, title: "John Wick", ratings: 9 },
        { id: 3, title: "Superman", ratings: 7 },
    ]);

    const handleChangeMovieName = () => {
        setMovies(movies.map((m => m.title === "John Wick" ? { ...movies, title: 'JOHN WICK', ratings: "9.5" } : m)))
    }


    return (
        <div>
            <h1>Movies Verse</h1>
            {
                movies.map((mv => (
                    <div key={mv.id}>
                        <h1>Movie Name : {mv.title}</h1>
                        <p>Ratings : {mv.ratings}</p>
                    </div>
                )))
            }
            <button className='btn' onClick={handleChangeMovieName}> Change Name</button>
        </div>
    )
}

export default MoviesVerse