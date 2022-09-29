import React from 'react'
import { NavItem } from 'react-bootstrap';
import { NavLink } from "react-router-dom";



function PokeNav() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <nav className="navbar navbar-dark bg-red">
       <div className="container">
       <NavLink end className={ setActiveClass } to="/">
        
    Home
    </NavLink>
    <NavLink className={ setActiveClass } to="/pokemones">
    Personajes
    </NavLink>
    <NavItem> logo </NavItem>
 

    </div>
       </nav>
   
    
  )
}

export default PokeNav

