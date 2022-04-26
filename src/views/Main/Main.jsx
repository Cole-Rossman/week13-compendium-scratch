import { useState, useEffect } from 'react'
import { fetchPokemon } from '../../services/pokemon'

export default function Main() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          const allPokemon = await fetchPokemon();
          setPokemon(allPokemon);
      }
      fetchData();
    }, []);


  return (
    <div>Main</div>
  )
}
