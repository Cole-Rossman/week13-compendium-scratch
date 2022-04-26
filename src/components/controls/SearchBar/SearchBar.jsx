import React from 'react'
import style from './SearchBar.css'

export default function SearchBar({ query, setQuery, callBack }) {
  return (
    <div className={style.searchBar}>
      <input placeholder={'search pokemon'} value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={callBack}>Search</button>
    </div>
  );
}
