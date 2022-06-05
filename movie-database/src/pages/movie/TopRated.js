import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Top Rated" movies={movies} />
    </>
  );
}

export default TopRatedMovie;
