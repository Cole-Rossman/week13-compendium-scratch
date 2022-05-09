import { render, screen } from '@testing-library/react'
import PokeCard from './PokeCard'

const pokemonData = {
    pokemon: "venusaur-mega",
    id: 4,
    type_1: "grass",
    type_2: "poison",
    url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png",
}


test('Should render pokemon information on card', () => {
    render(
        <PokeCard {...pokemonData} />
    )
      
    const pokemonName = screen.getAllByRole('heading', { level: 3 });
    expect(pokemonName[0]).toBeInTheDocument();
      
    const pokemonTypes = screen.getAllByRole('heading', { level: 5 });
    expect(pokemonTypes[0]).toBeInTheDocument();
    
    const testName = screen.getByText(/venusaur-mega/i);
    expect(testName).toBeInTheDocument(); 
    
    const testImage = screen.getByAltText(/image of venusaur-mega/i);
    expect(testImage).toBeInTheDocument(); 

    const testType1 = screen.getByText(/grass/i);
    expect(testType1).toBeInTheDocument(); 
    
    const testType2 = screen.getByText(/poison/i);
    expect(testType2).toBeInTheDocument(); 


})