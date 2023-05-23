import './Banner.css';
import {useState,useEffect} from 'react';
import axios from '../../axios';
import {API_KEY, IMAGE_BASE_URL} from '../../constants/constants';

const Banner = () => {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`/trending/movie/day?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0])
      setMovie(response.data.results[1])
    })
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? IMAGE_BASE_URL+movie.backdrop_path : ""} )` }}>
    <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div className='banner_buttons'>
            <div className="button">Play</div>
            <div className="button">My List</div>
        </div>
        <h1 className="description">{movie? movie.overview : ""}</h1>
    </div>
    <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner