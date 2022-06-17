import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
  // buat dispatch
  const dispatch = useDispatch();

  /**
   * Melakukan useEffect.
   * useEffect to perform other jobs: fetch data
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovies(response.data.results));
  }

  /**
   * Render Component Movies.
   * Kirim props movies yang berisi nilai state movies
   */
  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default PopularMovie;
