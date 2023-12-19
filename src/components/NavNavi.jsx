import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import pokeball from "../assets/pokeball.png";


const Navigation = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <Navbar bg="warning">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Navbar.Brand className="text-white">
            <Link to="/" className="text-white text-decoration-none">
            <Image className="logo-Pokedex" src={pokeball} alt="pokeball" />
              Pokedex
            </Link>
          </Navbar.Brand>
        </Navbar.Collapse>

        <Nav>
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>

          <NavLink to="/pokemons" className={activeClass}>
            Lista de Pokemons
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;

