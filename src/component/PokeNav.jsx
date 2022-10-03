import React from 'react'
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import logo from '../asset/img/Logo.jpg'



function PokeNav() {
  const setActive = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar className="d-flex justify-content-between px-3" variant="light" style={{ background: "blue" }}>
        <Container>
        <Navbar.Brand className='mr-5 '>
        <div className='d-flex links'>   <NavLink className={setActive} to="/pokemones">
          Home
        </NavLink>
          <NavLink  className={setActive} to="/">
            Pokemones
          </NavLink>
        </div>
      </Navbar.Brand>
      <Navbar.Brand>
        <img
        className='imgLogo'
          width="80"
          src={logo}
          alt="" />
      </Navbar.Brand>

        </Container>
    

    </Navbar >


  )
}

export default PokeNav

