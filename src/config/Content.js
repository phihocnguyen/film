import React from 'react'
import {Route, Routes } from 'react-router-dom'
import AllMovie from '../components/AllMovie/AllMovie.jsx'
import MovieDetail from './pages/detail/MovieDetail.jsx'
import Home from '../pages/Home.jsx'


const Content = () => {
  return (
    <>
      <Routes >
      <Route path="/" element={
        <Home />
      }/>
      <Route path="/:category/:id" element={
        <MovieDetail />
      }/>
      <Route path="/:category" element={
        <AllMovie/>
      }/>
      <Route path="/:category/search/:kw" element={
        <AllMovie />
      }/>
    </Routes>
    </>
  )
}

export default Content