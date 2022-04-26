import { useState, useEffect } from 'react'
import { fetchPokemon } from '../../services/pokemon'
import PokeCard from '../../components/PokeCard/PokeCard'

export default function Main() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          const allPokemon = await fetchPokemon();
          setPokemon(allPokemon);
          setLoading(false);
      }
      fetchData();
    }, []);

  if (loading) return <h1>Loading...</h1>

  return (
    <div className='main'>
        <div className='pokemon-list'>
            {pokemon.map((each) => {
                // using curlies makes an explicit return
               return <PokeCard key={each.id} {...each} />
            })}
        </div>
    </div>
  )
}
