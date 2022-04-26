import { useState, useEffect } from 'react'
import { fetchPokemon, fetchSearchedPokemon } from '../../services/pokemon'
import PokeCard from '../../components/PokeCard/PokeCard'
import SearchBar from '../../components/controls/SearchBar/SearchBar'
import style from  './Main.css'

export default function Main() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
    try {
      const fetchData = async () => {
          const allPokemon = await fetchPokemon();
          setPokemon(allPokemon);
          setLoading(false);
      }
      fetchData();
    } catch (e) {
      setError(e.message)}
    }, []);

    const searchPokemon = async () => {
        const searchData = await fetchSearchedPokemon(search);
        setPokemon(searchData);
        setSearch('');
    };

  if (loading) return <h1>Loading...</h1>

  return (
    <div className={style.main}>
        {error && <p>{error}</p>}
        <SearchBar query={search} setQuery={setSearch} callBack={searchPokemon} />
        <ul className={style.pokemonlist}>
            {pokemon.map((each) => (
                // using curlies makes an explicit return
                   <PokeCard key={each.id} {...each} /> 
            ))}
        </ul>
    </div>
  )
}
