import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieCard.module.css';

export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className={styles.card}>
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
        <h3 className={styles.title}>{movie.Title} ({movie.Year})</h3>
      </Link>
      <button className={styles.button} onClick={() => onToggleFavorite(movie)}>
        {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );
}