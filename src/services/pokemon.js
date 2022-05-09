export async function fetchPokemon() {
    const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
    const data = await resp.json();
    return data.results;
}


export async function fetchSearchedPokemon(search) {
    const params = new URLSearchParams();
    if (search) {
        params.set('pokemon', search);
    }
    const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&${params.toString()}`);
    const data = await resp.json();
    return data.results;
}