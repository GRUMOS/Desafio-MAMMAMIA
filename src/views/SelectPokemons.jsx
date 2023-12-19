import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import axios from "axios";

const SelectPokemons = () => {
  const navigate = useNavigate();

  const [pokemons, setPokemons] = React.useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        setPokemons(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        Swal.fire("Error al cargar los Pokemons");
      }
    };
    getPokemons();
  }, []);

  const [selectedPokemon, setSelectedPokemon] = React.useState([]);

  const goToDetails = () => {
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`);
    } else {
      Swal.fire("Selecciona a un Pokemon");
    }
  };

  return (
    <div className="pokemons">
      <h2 className="mt-4">Buscar Pokemon</h2>
      <section className="select-pokemon">
        <Form.Select
          className="pokeselect"
          value={selectedPokemon}
          onChange={({ target }) => setSelectedPokemon(target.value)}>
          <option value="" disabled>
            Selecciona a un Pokemon
          </option>
          {pokemons.length &&
            pokemons.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
        </Form.Select>

        <button className="btn btn-warning" onClick={goToDetails}>
          Ver detalles
        </button>
      </section>
    </div>
  );
};

export default SelectPokemons;
