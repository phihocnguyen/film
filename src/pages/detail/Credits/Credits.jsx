import React, { useEffect, useState } from 'react'
import movieAPI from '../../../api/movieAPI'
const Credits = (props) => {
    const {id} = props
    let [casts, setCasts] = useState([])
    useEffect(() => {
        const getCasts = async () => {
            if(id) {
                const data = await movieAPI.getCredits('movie',id).then(results => results.cast)
                setCasts(data)
            }
        }
        getCasts()
    }, [id])
    casts = casts ? casts.slice(0,5) : []
  return (
    <div className='flex items-center'>
        {casts.map(item => {
            return <div key = {item.id} className ='mr-4 w-1/4'>
                <div className='w-[100px] h-[150px] bg-cover bg-center bg-no-repeat' style = {item.profile_path ? {backgroundImage: `url(https://image.tmdb.org/t/p/original${item.profile_path})`} : {backgroundImage: `url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)`}}></div>
                <div className='mt-4'>
                    <p className='text-white'>{item.name}</p>
                </div>
            </div>
        })}
    </div>
  )
}

export default Credits