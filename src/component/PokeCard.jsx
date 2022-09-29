import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PokeCard({ pokemon }) {
  console.log("🚀 ~ file: PokeCard.jsx ~ line 6 ~ PokeCard ~ pokemon", pokemon)

  return (
    <div className="card"   style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title><h2 className="name_title">{pokemon.name}</h2></Card.Title>
        <Card.Text className="title">
          Type: {pokemon.types[0].type.name}
        </Card.Text>
        <Card.Text className="title">
          Ability: {pokemon.abilities[0].ability.name}
        </Card.Text>
        <Card.Text className="title">
          Weight: {pokemon.weight}
        </Card.Text>
        <Card.Text className="title">
          Height: {pokemon.height}
        </Card.Text>
        <Button variant="primary">Volver</Button>
      </Card.Body>
    </div>
  )
}
