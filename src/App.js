import "./index.css"
import  'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokeNav from "./component/PokeNav"
import Home from "./views/Home"
import Pokemones from "./views/Pokemones"
import NotFound from "./views/NotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PokeNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/:id" element={<Pokemones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
