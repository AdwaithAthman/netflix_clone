import "./RowPost.css";
import { useState, useEffect } from "react";
import axios from "../../axios";
import { IMAGE_BASE_URL } from "../../constants/constants";
import YouTube from "react-youtube";
import { API_KEY } from "../../constants/constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [youtubeKey, setYoutubeKey] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response?.data?.results);
      setMovies(response?.data?.results);
    });
  }, []);

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        if (response?.data?.results?.length !== 0) {
          setYoutubeKey(response?.data?.results[0]?.key);
        } else {
          alert("No trailer found");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          alert("No trailer found");
        } else {
          alert("An error occurred");
        }
      });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            key={obj.id}
            className={props.isSmall ? "small-poster" : "poster"}
            alt="poster"
            src={`${IMAGE_BASE_URL + obj.backdrop_path}`}
          />
        ))}
      </div>
      {youtubeKey && <YouTube videoId={youtubeKey} opts={opts} />}
    </div>
  );
}

export default RowPost;
