import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {
    const [pokeName, setPokeName] = useState([]);
    const [pokeSelected, setPokeSelected] = useState("");
    const navigate = useNavigate();
    const url = 'https://pokeapi.co/api/v2/pokemon';

    const getPokemones = async () => {
        const res = await fetch(url);
        const data = await res.json();

        setPokeName(data.results);
    }
    const irPoke = () => {
        if (pokeSelected) navigate(`/pokemones/${pokeSelected}`);
        else alert("Debe seleccionar un pokemon");
    }

    useEffect(() => {
        getPokemones();
    }, []);



    return (
        <>
            <div className="mt-5">
                <h1>Selecciona un pokemon</h1>
                <select
                    className="form-selected text-center px-5"
                    value={pokeSelected}
                    onChange={(e) => setPokeSelected(e.target.value)}
                >
                    <option value="" disabled>Pokemones</option>
                    {pokeName.map((ele, i) => (
                        <option key={i} value={ele.name}>{ele.name}</option>
                    ))}
                </select>
                <button className="buttonDetails" onClick={irPoke}>Ver detalle</button>
            </div>
        </>

    );
}
