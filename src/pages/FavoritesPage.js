import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [sortMethod, setSortMethod] = useState('title');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  }, []);

  const handleToggleFavorite = (movie) => {
    const updated = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const sortedFavorites = [...favorites].sort((a, b) => {
    if (sortMethod === 'title') return a.Title.localeCompare(b.Title);
    if (sortMethod === 'year') return a.Year.localeCompare(b.Year);
    return 0;
  });

  return (
    <div>
      <h2>Избранные фильмы</h2>
      <label>Сортировать: </label>
      <select value={sortMethod} onChange={(e) => setSortMethod(e.target.value)}>
        <option value="title">По алфавиту</option>
        <option value="year">По году</option>
      </select>
      <MovieList movies={sortedFavorites} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}