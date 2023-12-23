import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  const cartItemStyles = {
    color: "black", // Cambia el color del texto a negro
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <h3>¡Pizzería Mamma Mia!</h3>
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            <span style={cartItemStyles}>Cart items:</span>{" "}
            <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
