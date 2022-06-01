import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../../components/Movies/Movies";
import Button from "../../components/ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
    /**
     * - Parameter kedua sebagai Lifecycle Update.
     * - useEffect dijalankan kembali ketika state di parameter berubah.
     * - Jika parameter kosong, useEffect dijalankan sekali (Mount).
     * - Parameter array biasa disebut sebagai dependencies.
     */
  }, [id]);

  async function getDetailMovie() {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    setMovie(response.data);
  }

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={trailer}>
          Watch
        </Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
