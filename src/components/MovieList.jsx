import React from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/MovieList.module.css';

export default function MovieList({ movies, favorites, onToggleFavorite }) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}