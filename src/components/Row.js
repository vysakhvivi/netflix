import { useState, useEffect } from "react";
import instance from '../axios'
import React from 'react'
import './row.css'


function Row({ title, fetchUrl, isLargeRow }) {

  const base_url = "https://image.tmdb.org/t/p/original/"


  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results)
    }
    fetchData()
  }, [])
  console.log("The movies is", movies);
  return (


    <div>
      <div className="row">

        <h2>{title}</h2>
        <div className="movie_posters">

          {movies.map((movie) => (
            <>
              <img
                key={movie.id}
                className={`movie_poster ${isLargeRow && "movie_posterLarge"}`}
                alt={movie.name}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              />

              

            </>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Row