import React from 'react'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './moviecard.scss'
const MovieCard = (props) => {
    const {item} = props
  return (
        <Link to ={`/${props.category}/${item.id}`}>
            <div className='w-[100%]'>
                <div className='card-img relative rounded-3xl cursor-pointer w-[100%] h-[100%] pt-[150%] bg-cover bg-no-repeat bg-center' style = {{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.poster_path || item.backdrop_path}`}}>
                    <div className='btn absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible opacity-0'>
                        <BsFillPlayCircleFill className='text-white text-5xl'/>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <h2 className='text-white text-lg'>{item.title}</h2>
                </div>
            </div>
        </Link>
  )
}

export default MovieCard