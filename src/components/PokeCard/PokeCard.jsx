import React from 'react'
import style from './PokeCard.css'

export default function PokeCard({ url_image, pokemon, id, type_1, type_2 }) {
  return (
    <div key={ id } className={style.pokemoncard}>
       <img alt='name' width="72" height="54" src={url_image} />
       <h3>{pokemon}</h3>
       <p>
         (type: {type_1}, {type_2})
       </p>
    </div>
  );
}
