import pikaPokemon from "../assets/pika.jpg";
import pokemonTitulo from "../assets/pokemon.png";
import pokeFondo from "../assets/fondo.jpg";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <section className="home">
      <h2 className="title-home mt-2">
        <Image
          className="Titulo-Pokemon"
          src={pokemonTitulo}
          alt="Titulo"
          style={{ width: "600px", height: "auto" }}
        />
      </h2>
      <Image
        className="custom-image-class"
        src={pikaPokemon}
        alt="pika"
        style={{ width: "600px", height: "auto" }}
      />
    </section>
  );
};

export default Home;
