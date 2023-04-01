import React from 'react'
import { Link } from 'react-router-dom'
import { category } from '../api/movieAPI'
import Banner from '../components/banner/Banner'
import MovieList from '../components/MovieList/MovieList'

const Home = () => {
  if (window.scrollY) {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  }
  return (
    <div className='bg-[rgb(15,15,15)] text-white overflow-hidden'>
      <Banner/>
      <div className='mt-12'>
        <div>
          <div className='flex justify-between px-4'>
            <h2 className='font-bold text-xl'>Trending Movies</h2>
            <Link to ='/movies'><button className='py-2 px-4 border border-solid hover:border-white rounded-md border-[rgba(85,85,85,0.9)] transition duration-200'>VIEW MORE</button></Link>
          </div>
          <div>
            <MovieList category = {category.movie} type = 'popular' id/>
          </div>
        </div>
        <div className='my-12'>
          <div className='flex justify-between px-4'>
            <h2 className='font-bold text-xl'>Top Rated Movies</h2>
            <Link to ='/movies'><button className='py-2 px-4 border border-solid hover:border-white rounded-md border-[rgba(85,85,85,0.9)] transition duration-200'>VIEW MORE</button></Link>
          </div>
          <div>
            <MovieList category = {category.movie} type = 'topRated' id />
          </div>
        </div>
        <div className='my-12'>
          <div className='flex justify-between px-4'>
            <h2 className='font-bold text-xl'>Trending TV</h2>
            <Link to ='/tv'><button className='py-2 px-4 border border-solid hover:border-white rounded-md border-[rgba(85,85,85,0.9)] transition duration-200'>VIEW MORE</button></Link>
          </div>
          <div>
            <MovieList category = {category.tv} type = 'popular' id />
          </div>
        </div>
        <div>
          <div className='flex justify-between px-4'>
            <h2 className='font-bold text-xl'>Top Rated TV</h2>
            <Link to ='/tv'><button className='py-2 px-4 border border-solid hover:border-white rounded-md border-[rgba(85,85,85,0.9)] transition duration-200'>VIEW MORE</button></Link>
          </div>
          <div>
            <MovieList category = {category.tv} type = 'topRated' id/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home