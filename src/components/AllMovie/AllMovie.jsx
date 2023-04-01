import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../../api/axiosClient'
import movieAPI from '../../api/movieAPI'
import { category as cate } from '../../api/movieAPI'
import MovieCard from '../MovieCard/MovieCard'
const AllMovie = (props) => {
    if (window.scrollY) {
        window.scroll(0, 0); // reset the scroll position to the top left of the document.
    }
    const {category,kw} = useParams()
    const [movies, setMovies] = useState([])
    const [film,setFilm] = useState('')
    const [page, setPage] = useState(1)
    useEffect(() => {
        const getData = async () => {
            let data = null;
            if(kw === undefined) {
                switch(category) {
                        case cate.movie: 
                        data = await movieAPI.getMovieList('topRated').then(result => result.results)
                        break;
                    default: 
                        data = await movieAPI.getTvList('topRated').then(result => result.results)
                }
            } else {
                data = await axiosClient.get(`https://api.themoviedb.org/3/search/${category}?api_key=3e92671fca168537fe01c0fad2e77b4d&page=1&query=${kw}`).then(result => result.results)
            }
            setMovies(data)
        }
        getData()   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, kw])

    const handleSearchFilm = e => {
        setFilm(e.target.value)
    }

    const LoadMore = async () => {
        let newData = null;
        if(kw === undefined) {
            const params = {
                page: page + 1
            }
            switch(category) {
                    case cate.movie: 
                    newData = await axiosClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=3e92671fca168537fe01c0fad2e77b4d&page=${params.page}`).then(result => result.results)

                    break;
                default: 
                    newData = await axiosClient.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=3e92671fca168537fe01c0fad2e77b4d&page=${params.page}`).then(result => result.results)

                }
            } else {
            const params = {
                page: page + 1,
                query: kw,
            }
            newData = await axiosClient.get(`https://api.themoviedb.org/3/search/${category}?api_key=3e92671fca168537fe01c0fad2e77b4d&page=${params.page}&query=${params.query}`).then(result => result.results)
        }
        newData = [...movies, ...newData]
        setMovies(newData)
        setPage(page + 1)
    }
    

  return (
    <div className='bg-[#0f0f0f]'>
        <div className='bg-cover bg-no-repeat bg-center min-h-[300px]' style ={{backgroundImage: 'url(https://img.freepik.com/premium-vector/cinema-poster-night-film-movies-popcorn-retro-movie-posters-template-illustration-set_102902-1871.jpg?w=2000)'}}></div>
        <div className='max-w-[1300px] m-[auto]'>
            <div className='w-1/4 mt-8'>
                <form>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search somethingggg..." onChange = {(e) => handleSearchFilm(e)} value = {film} required/>
                        <Link to ={`/${category}/search/${film}`}>
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className='flex flex-wrap justify-center mt-16'>
                {movies.map(item => (<div key = {item.id} className='w-[calc(20%-40px)] mr-8'>

                        <MovieCard item ={item} category = {category} />

                </div>))}
            </div>
            <div className='text-center mt-8 pb-8'>
                <button onClick = {LoadMore} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Load More
                </button>
            </div>
        </div>
    </div>
  )
}

export default AllMovie