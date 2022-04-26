import { render, screen } from '@testing-library/react';
import Main from './Main'

describe('Main', () => {
  it('should display a list of pokemon and have the option to search pokemon', async () => {
    render(
        <>
        <Main />
        </>
    );
    const pokemonList = await screen.findByRole('list');




    expect(pokemonList.children.length).toEqual(20);

  });
});

