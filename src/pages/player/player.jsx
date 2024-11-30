import React, { useEffect, useState } from 'react';
import'./player.css';
import back_arrowicon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
const player = () => {

const {id} = useParams();

const navigate=useNavigate();

const[apiData,setApiData]=useState({
  name:"",
  key:"",
  published_at:"",
  typeof:""
  
})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmNjZDNjYzQyZDk0YTcxZjYyYWZiNWI4MjhjYWZjYiIsIm5iZiI6MTcyOTY5NTg2Ni43ODExNTMsInN1YiI6IjY2ZmE4YzMzMzkxMDEzZWZhYjEzMmYyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tvXFqONoFzT8TRjSlaOvSsabX7BDGRApImsOAnJbHbA'
  }
};
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  
  
  return (
    <div className='player'>
      <img src={back_arrowicon} alt=""onClick={()=>{navigate(-1)}} />
      <iframe width='90%' height='90%'src={`https://www.youtube.com/embed/${apiData.key}`}title='trailer'frameBorder='0'allowFullScreen>
      </iframe>
    <div className='player-info'>


      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
      </div>
    </div>

  )
}

export default player
