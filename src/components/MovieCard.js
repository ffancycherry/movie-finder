import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieCard.module.css';
import { ReactComponent as HeartFilled } from '../assets/heart-filled.svg';
import { ReactComponent as HeartOutline } from '../assets/heart-outline.svg';

export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className={styles.card}>
      <Link to={`/movie/${movie.imdbID}`} className={styles.link}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
          alt={movie.Title}
          className={styles.poster}
        />
      </Link>
      <div className={styles.info}>
    <div className={styles.titleWrapper}>
      <h3 className={styles.title}>
        {movie.Title} ({movie.Year})
      </h3>
    </div>
    <button
      className={styles.favoriteButton}
      onClick={() => onToggleFavorite(movie)}
      aria-label="Toggle Favorite"
    >
      {isFavorite ? <HeartFilled className={styles.icon} /> : <HeartOutline className={styles.icon} />}
    </button>
  </div>
    </div>
  );
}