import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import MovieDetail from './pages/MovieDetail';
import styles from './styles/App.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../src/assets/search.svg';
import { ReactComponent as FavoritesIcon } from '../src/assets/heart-outline.svg';


export default function App() {
  return (
    <Router>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
          <SearchIcon className={styles.icon} />
        </NavLink>

        <NavLink to="/favorites" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
          <FavoritesIcon className={styles.icon} />
        </NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}