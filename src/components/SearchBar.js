import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Название фильма..." />
        <button className={styles.button}>Найти</button>
    </form>

  );
}