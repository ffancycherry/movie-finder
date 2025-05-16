import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../api';
import styles from '../styles/Detail.module.css';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div className={styles.loading}>Загрузка...</div>;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.backdrop}
        style={{
          backgroundImage: `url(${movie.Poster})`
        }}
      ></div>

      <div className={styles.content}>
        <img className={styles.poster} src={movie.Poster} alt={movie.Title} />

        <div className={styles.info}>
          <h2 className={styles.title}>{movie.Title} ({movie.Year})</h2>
          <p><strong>Жанр:</strong> {movie.Genre}</p>
          <p><strong>Режиссёр:</strong> {movie.Director}</p>
          <p><strong>Рейтинг: ⭐️ </strong> {movie.imdbRating}</p>
          <p><strong>Актёры:</strong> {movie.Actors}</p>
          <div className={styles.plot}>
            <p><strong>Описание:</strong></p>
            <p>{movie.Plot}</p>
          </div>
        </div>
        
      </div>

      

      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Назад
      </button>
    </div>
  );
}