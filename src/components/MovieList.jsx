import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from './MovieItem'
import AddMovie from './AddMovie'
import { filterMovie } from '../redux/movieSlice'
import { NavLink } from 'react-router-dom'

function MovieList() {

  const {movieList} = useSelector(state=>state.movieReducer)
  const dispatch=useDispatch()
 
  return (
    <div style={{display:"flex" ,alignItems:"center" ,gap:"2vw",flexDirection:"column"}}>
        <div>
        <input type='text' placeholder='search a movie' onChange={(e)=>{dispatch(filterMovie(e.target.value))}}></input>
        <AddMovie></AddMovie>
        </div>
        <div style={{display:"flex" ,justifyContent:"center" ,gap:"2vw"}}>
      {movieList.map((e,index)=><NavLink to={"/"+index}><MovieItem item={e}/></NavLink>)}
      </div>
    </div>
  )
}

export default MovieList
