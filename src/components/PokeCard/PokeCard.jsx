import React from 'react'
import style from './PokeCard.css'

export default function PokeCard({ url_image, pokemon, id, type_1, type_2 }) {
  return (
    <div key={ id } className={style.pokemoncard}>
       <img alt={`Image of ${pokemon}`} width="72" height="54" src={url_image} />
       <h3>{pokemon}</h3>
       <h5>
         (type: {type_1}, {type_2})
       </h5>
    </div>
  );
}
