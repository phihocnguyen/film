import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import movieAPI from '../../api/movieAPI'
import MovieList from '../../components/MovieList/MovieList'
import Credits from './Credits/Credits'
import DetailVideos from './DetailVideos/DetailVideos'
import './moviedetail.scss'

const MovieDetail = () => {
    if (window.scrollY) {
        window.scroll(0, 0); 
    }
    const {category,id} = useParams()
    const [movie,setMovie] = useState([])
    useEffect(() => {
        const getMovieDetail = async () => {
            const item = await movieAPI.getDetail(category,id)
            setMovie(item)
        }
        getMovieDetail()
    }, [category,id])
  return (
    <div className='container'>
        <div className='moviedetail-banner' style = {{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path})`}}></div>
        <div className='moviedetail-content'>
            <div className='moviedetail-content__poster'>
                <div className='moviedetail-content__poster__image' style = {{backgroundImage : `url(https://image.tmdb.org/t/p/original${movie.poster_path || movie.backdrop_path})`}}></div>
            </div>
            <div className='moviedetail-content__info ml-8'>
                <div>
                    <p className='text-white text-[48px] font-bold'>{movie.title || movie.name}</p>
                </div>
                <div className='mt-4'>
                    <ul className='flex items-center'>
                        {movie.genres && movie.genres.map((item) => {
                            return <li className = 'mr-4 text-white text-[14px] py-1 px-8 rounded-3xl border-solid border-2 border-white' key = {item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
                <div className='mt-8'>
                    <p className='text-white'>{movie.overview}</p>
                </div>
                <div className='mt-8'>
                    <p className='text-lg text-white'>Cast:</p>
                    <div className='mt-4'>
                        <Credits id = {movie.id}/>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        <div className='mt-8'>
            <DetailVideos id ={movie.id}/>
        </div>
        <div className='max-w-[1300px] m-[auto] mt-8'>
            <div className='mb-4'>
                <h3 className='font-bold text-white text-xl'>Similar</h3>
            </div>
            <div>
                <MovieList category = {category} type ='similar' id = {movie.id}/>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail