import React from 'react'

const Footer = () => {
  return (
    <div className='h-[400px] bg-cover bg-no-repeat bg-center' style = {{backgroundImage: 'url(https://phimwar.com/static/skin/footer-bg.jpg)'}}>
      <div className='flex items-center justify-center text-white h-[100%] text-xl'>
          <div>
            <ul>
              <li>Home</li>
              <li className='my-8'>Contact Us</li>
              <li className='my-8'>Term of services</li>
              <li>About us</li>
            </ul>
          </div>
          <div className='mx-[120px]'>
            <ul>
              <li>Recommendation</li>
              <li className='my-8'>Popular</li>
              <li className='my-8'>Top Rated</li>
              <li>Up Coming</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer