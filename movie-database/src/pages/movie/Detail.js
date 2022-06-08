import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {
  // Simpan movies (state), id (params), API_KEY ke variable
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    setMovies(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation Movies" movies={movies} />
    </>
  );
}

export default Detail;
