import "./index.css"
import  'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokeNav from "./component/PokeNav"
import Home from "./views/Pokemones"
import Pokemones from "./views/Home"
import PokeDetalle from "./views/PokeDetalle"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PokeNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<PokeDetalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
