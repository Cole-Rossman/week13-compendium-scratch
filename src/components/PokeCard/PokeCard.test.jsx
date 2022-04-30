import { render, screen } from '@testing-library/react'
import PokeCard from './PokeCard'

test('Should render pokemon information on card', () => {
    render(
        <PokeCard />
    )
    const pokemonImage = screen.getByAltText(/pokemonimg/i);
    expect(pokemonImage).toBeInTheDocument();

    const pokemonName = screen.getByRole('heading', { level: 3 });
    expect(pokemonName).toBeInTheDocument();

    const pokemonTypes = screen.getByRole('heading', { level: 5 });
    expect(pokemonTypes).toBeInTheDocument();

})