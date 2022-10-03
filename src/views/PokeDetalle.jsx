import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PokeCard from "../component/PokeCard";
import Button from 'react-bootstrap/Button';


function PokeDetalle() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    const { name } = useParams();
    const navigate = useNavigate();


    const getPokemon = async (name) => {
        console.log("🚀 ~ file: PokeDetalle.jsx ~ line 11 ~ getPokemon ~ name", name)
        const res = await fetch(`${baseUrl}/${name}`);
        const data = await res.json();

        setPokemon(data);
        setLoading(false);
    }
const volver =()=>{
    navigate(`/pokemones/`);
}

    useEffect(() => {
        getPokemon(name);
    }, [name]);
    return (
        
        <div className="mt-5">
         {loading?'': <PokeCard pokemon={pokemon} />}  
         <Button variant="primary" onClick={volver}>Volver</Button>
        </div>
    );
}
export default PokeDetalle;
