import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../api';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    if (results.length === 0) {
        setError('Фильмы не найдены по вашему запросу.');
        setMovies([]);
    } else {
        setError('');
        setMovies(results);
    }
  };

  const handleToggleFavorite = (movie) => {
    const exists = favorites.find((fav) => fav.imdbID === movie.imdbID);
    const updated = exists
      ? favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      : [...favorites, movie];

    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };
  

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'tomato', textAlign: 'center' }}>{error}</p>}
      <MovieList movies={movies} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
    </>
  );
}