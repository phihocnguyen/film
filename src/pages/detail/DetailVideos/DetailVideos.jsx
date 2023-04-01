import React, { useEffect, useState } from 'react'
import movieAPI from '../../../api/movieAPI'
const DetailVideos = (props) => {

    const [videos,setVideos] = useState([])

    useEffect(() => {
        const getVideos = async () => {
            if(props.id) {
                const data = await movieAPI.getOtherVideo('movie', props.id)
                setVideos(data.results.slice(0,5))
            }
        }
        getVideos()
        
    }, [props.id])
  return (
    <div className='max-w-[1300px] m-[auto]'>
        {videos.map(item => <Video key = {item.id} item = {item}/>)}
    </div>
  )
}

export const Video = (props) => {
    const {item} = props
    return (
        <>
            <div className='mt-12'>
                <div className='mb-4'>
                    <h2 className='text-white text-xl font-bold'>{item.name}</h2>
                </div>
                <iframe className='w-[100%] h-[700px]' title = 'video' src = {`https://www.youtube.com/embed/${item.key}`}></iframe>
            </div>
        </>
    )
}

export default DetailVideos