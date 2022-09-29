import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCard from "../component/PokeCard";

function Pokemones() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    const { id } = useParams();

    const getPokemon = async (id) => {
        console.log("🚀 ~ file: Pokemones.jsx ~ line 11 ~ getPokemon ~ id", id)
        const res = await fetch(`${baseUrl}/${id}`);
        const data = await res.json();

        setPokemon(data);
        setLoading(false);
    }
    useEffect(() => {
        getPokemon(id);
    }, [id]);
    return (
        
        <div className="mt-5">
         {loading?'': <PokeCard pokemon={pokemon} />}  
        </div>
    );
}
export default Pokemones;
