import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main'

describe('Main', () => {
  it('should display a list of pokemon and have the option to search pokemon', async () => {
    render(
        <Main /> 
    );
    await screen.findByText(/loading/i);

    const pokemonList = await screen.findByRole('list');
    expect(pokemonList.children.length).toEqual(20);

    const searchPokemon = screen.getByPlaceholderText('search pokemon');
    userEvent.type(searchPokemon, 'char');

    const searchButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(searchButton);
    await screen.findByText(/loading/i);

    return waitFor(() => {
        const query = screen.getAllByText(/charizard/i);
        expect(query[0]).toBeInTheDocument();
    });
  });
});

