import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import movieAPI from '../../api/movieAPI'
import Modal, { ModalContent } from '../modal/Modal'



const Banner = () => {
    const navigate = useNavigate();
    const [movie,setMovie] = useState([])
    useEffect(() => {
        const getList = async () => {
            const data = await movieAPI.getMovieList('popular').then(results => results.results)
            setMovie(data[Math.floor(Math.random() * (data.length - 1))])
        }
        getList()
        
    }, [])
    const POSTER_PATH = `https://image.tmdb.org/t/p/original${movie.poster_path}`


    const setModalActive = async () => {
        const modal = document.querySelector('.modal')
        const video = await movieAPI.getOtherVideo('movie', movie.id)
        if(video.results.length > 0){
            const videoSrc = `https://www.youtube.com/embed/${video.results[0].key}`
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc)
        } else {
            modal.querySelector('.modal__content').innerHTML = `
                <p>NO TRAILER>
                <div className='ml-4 text-3xl cursor-pointer' onClick = {closeModal}>
                    <AiFillCloseCircle/>
                </div>
            `
        }
        modal.classList.toggle('active')

    }


    return (
        <div className='flex justify-center flex-col w-[100vw] h-screen bg-center bg-no-repeat bg-cover relative bg-blend-overlay' style = {{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) `}}>
            <div className='flex items-center justify-between absolute px-[64px] h-3/4'>
                <div className='mr-6 w-1/2'>
                    <h3 className='text-4xl text-white font-bold'>{movie.title}</h3>
                    <p className='mt-6 text-white'>{movie.overview}</p>
                    <div className='mt-8'>
                        <button onClick = {() => navigate(`movie/${movie.id}`)} type="button" className=" text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">PHÁT</button>
                        <button onClick = {setModalActive} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">XEM TRAILER</button>
                    </div>
                </div>
                <div className='h-full w-1/2 flex justify-center'>
                    <img className='rounded-xl object-cover h-full' src = {POSTER_PATH} alt = 'movie'/>
                </div>
            </div>
            <TrailerModal/>
        </div>
    )
}

const TrailerModal = () => {
    const trailer = useRef(null)
    
    const onClose = () => {
        trailer.current.setAttribute('src', '')
    }

    return (
        <Modal onClose = {onClose}>
            <ModalContent>
                <iframe ref = {trailer} height = "500px" width = "100%" title = "trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}

export default Banner