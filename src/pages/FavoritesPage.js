import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import styles from '../styles/FavoritesPage.module.css';

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
    <div className={styles.favWrapper}>
      <h2>Избранные фильмы</h2>
      <div className={styles.filter}>
        <label>Сортировать: </label>
        <select className={styles.select} value={sortMethod} onChange={(e) => setSortMethod(e.target.value)}>
          <option value="title">по алфавиту</option>
          <option value="year">по году</option>
        </select>
      </div>
      
      <MovieList movies={sortedFavorites} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}