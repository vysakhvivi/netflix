import React,{useEffect,useState} from 'react'
import instance from '../axios'
import requests from '../request'
import './banner.css'

function Banner() {
    const [movies,setMovies]=useState([]);

    useEffect(() => {
    async function fetchdata(){
        const request=await instance.get(requests.fetchNetflixOriginals)
        setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length -1)
        ])
        
    }
    fetchdata()
    }, [])

    function truncate(str,n)
    {
        return str?.length>n ? str.substr(0,n-1) + "...." : str
    }
    

  return (
    <header className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundPosition:'center center'
    
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movies.title || movies.name }
                </h1>

                <div className='banner_buttons'>
                    <button className='banner_play_button'>Play</button>
                    <button className='banner_play_button'>More info</button>

                </div>
                <h3 className='banner_description'>
                    {truncate(movies.overview,150)}
                </h3>
        </div>
        <div className='banner-fadebottom' />
    </header>
  )
}

export default Banner