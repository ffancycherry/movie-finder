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
    <div className={styles.container}>
        <img src={movie.Poster} className={styles.poster} />
        <div className={styles.info}>
            <h2 className={styles.title}>{movie.Title} ({movie.Year})</h2>
            <p><strong>Режиссер:</strong> {movie.Director}</p>
            <p><strong>Актеры:</strong> {movie.Actors}</p>
            <p><strong>Рейтинг:</strong> {movie.imdbRating}</p>
            <p>{movie.Plot}</p>
        </div>
    </div>
  );
}