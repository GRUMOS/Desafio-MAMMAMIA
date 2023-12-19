import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const PokeDetails = () => {
  const { name } = useParams();
  const [detailsPokemons, setDetailsPokemons] = useState(undefined);

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setDetailsPokemons(response.data);
        console.log(detailsPokemons);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPokemonStats();
  }, [name]);

  return (
    <>
      {(detailsPokemons?.stats.length >= 1 && (
        <div className="container mt-3">
          <div className="row">
            <div className="d-flex justify-content-center gap-4">
              <Image
                thumbnail
                src={detailsPokemons.sprites.other.dream_world.front_default}
                alt="pokemon"
                className="w-25 d-block"
              />
              <div className="ml-2">
                <h5 className="text-capitalize fs-2 text-success">{detailsPokemons.name}</h5>
                <ul className="list-unstyled">
                  {detailsPokemons.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      <p className="font-bold">
                        <span className="fs-5 text-capitalize strong">{stat.stat.name}</span>: {stat.base_stat}
                      </p>
                    </li>
                  ))}
                </ul>

                <Stack direction="horizontal" gap={2}>
                  {detailsPokemons.types.map((type) => (
                    <Badge key={type.type.name} className="text-capitalize" bg="primary">
                      {type.type.name}
                    </Badge>
                  ))}
                </Stack>
              </div>
            </div>
          </div>
        </div>
      )) || <p>Cargando Data</p>}
    </>
  );
};

export default PokeDetails;
