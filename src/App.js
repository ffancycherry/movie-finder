import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import MovieDetail from './pages/MovieDetail';
import styles from './styles/App.module.css';

export default function App() {
  return (
    <Router>
      <nav className={styles.nav}>
        <Link to="/">Поиск</Link> | <Link to="/favorites">Избранное</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}