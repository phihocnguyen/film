import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'
const Header = () => {

    const { pathname } = useLocation()
    
    
    const nav = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Movies',
            path: '/movie'
        },
        {
            name: 'TV Series',
            path: '/tv'
        }
]
console.log(pathname)
        const currPath = nav.findIndex(item => item.path === pathname)

  return (
    <div className='w-screen fixed top-0 left-0 text-white z-50'>
        <div className='p-8 px-[64px] w-full flex items-center justify-between'>
            <Link to ='/'>
                <div className='px-4 py-2 border border-solid border-white rounded-xl'>
                    <h2 className='fond-bold text-xl'>HT MOVIES</h2>
                </div>
            </Link>
            <div>
                <ul className='flex items-center text-xl'>
                    {nav.map((item,index) => (
                        <li key = {index} className = {`${currPath === index ? 'active hover:text-red-700 font-bold duration-200 mr-8 cursor-pointer': 'hover:text-red-700 font-bold duration-200 mr-8 cursor-pointer'}`}>

                            <Link to ={`${item.path}`}>
                                {item.name}
                            </Link>
                            
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header