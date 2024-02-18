import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

function MovieDesc() {

  const {id}=useParams()
  const {movieList}=useSelector(state=>state.movieReducer)
  return (
    <div>
           <div>

<div>
    <NavLink to="/"> <button style={{ position: 'absolute', left: '10px' }}>⏪</button></NavLink>
    <iframe
        width="560"
        height="315"
        src={movieList[id].video}   
        frameborder="0"
        allowfullscreen
    ></iframe>

    <h1> genre :<span style={{ color: 'red' }}> {movieList[id].genre}</span> </h1>
    <center> <p style={{ width: '500px' }}>  <span style={{textDecoration:'underline' }}>{movieList[id].title} </span> : {movieList[id].description} </p></center>

</div>
</div>

    </div>
  )
}

export default MovieDesc
