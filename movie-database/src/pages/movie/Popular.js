import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
  // Membuat state movie
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    // Jalankan action updateMovies: kirim movies dari api
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default PopularMovie;
