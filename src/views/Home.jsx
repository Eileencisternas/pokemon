import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const irAPokemones = () => {
        navigate(`/pokemones/${id}`);
    };
    return (
        <div className="mt-5">
            <h1>Selecciona un pokemon</h1>
            <input
                type="text"
                value={id}
                onChange={({ target }) => setId(target.value)}
            />
            <button onClick={irAPokemones}>Ver detalle</button>
        </div>
    );
}
