import React, { useEffect, useState } from 'react'
import movieAPI from '../../api/movieAPI'
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../MovieCard/MovieCard';
import { category } from '../../api/movieAPI';
import './movielist.scss'
const MovieList = (props) => {
    const {id} = props
    const [movies, setMovies] = useState([])
    useEffect(() => {
        let data = [];
        const getMovies = async () => {
            if(id){
                if(props.type === 'similar') {
                    data = await movieAPI.getSimilarVideo(props.category, id).then(result => result.results)
                } else {
                  switch(props.category){
                    case category.movie: 
                        data = await movieAPI.getMovieList(props.type).then(result => result.results)
                        break;
                    default: 
                      data = await movieAPI.getTvList(props.type).then(result => result.results)
                    
                  }
                }
                if(data.length < 1) {
                      data = await movieAPI.getTvList('onTheAir').then(result => result.results)
                }
            }
            setMovies(data)
        }
        getMovies()
    }, [id, props.category,props.type])
  return (
    <div className='mt-12'>
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className = 'flex overflow-hidden'
      >
        {
            movies.map(item => {
                return (
                    <SwiperSlide key ={item.id}>
                        <MovieCard category = {props.category} item = {item}/>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </div>
  )
}

export default MovieList