import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';
import styles from '../styles/Detail.module.css';


export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Загрузка...</div>;

  return (
    <div className={styles.detailContainer}>
      <img className={styles.poster} src={movie.Poster} alt={movie.Title} />
      <div className={styles.info}>
        <h2>{movie.Title} ({movie.Year})</h2>
        <p><strong>Жанр:</strong> {movie.Genre}</p>
        <p><strong>Режиссёр:</strong> {movie.Director}</p>
        <p><strong>Актёры:</strong> {movie.Actors}</p>
        <p><strong>Рейтинг:</strong> ⭐️ {movie.imdbRating}</p>
        <p><strong>Описание:</strong><br />{movie.Plot}</p>
      </div>
    </div>
  );
}