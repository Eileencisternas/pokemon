import React from 'react'
import Card from 'react-bootstrap/Card';

export default function PokeCard({ pokemon }) {
  console.log("🚀 ~ file: PokeCard.jsx ~ line 6 ~ PokeCard ~ pokemon", pokemon)

  return (
    <Card className="mt-5 mx-auto flex-row p-1" style={{ width: '35rem' }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default} heigth="330"/>
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
      </Card.Body>
    </Card>
  )
}
