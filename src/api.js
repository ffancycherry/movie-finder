const API_KEY = '2a8854ea';
const BASE_URL = 'https://www.omdbapi.com/';

export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await res.json();
  return data.Search || [];
}

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return await res.json();
}