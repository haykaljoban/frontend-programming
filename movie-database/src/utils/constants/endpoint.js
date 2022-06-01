// Membuat variable API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

// Membuat variable URL API: BASE_URL
const BASE_URL = "https://api.themoviedb.org/3";

// Membuat Variable Endpoints (object)
const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  // Tambahkan Endpoints lain
};

export default ENDPOINTS;
