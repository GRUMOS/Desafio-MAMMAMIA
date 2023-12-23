import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import pizzas from "../data/pizzas.json";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-summary">
        <div className="cart-header">Shopping Cart</div>
        <div className="cart-items">
          {cart.map((cartItem) => {
            const product = pizzas.find((item) => item.id === cartItem.id);
            if (!product) {
              return null;
            }

            return (
              <div key={product.id} className="cart-item">
                <img
                  src={product.img}
                  className="cart-item-img"
                  alt={product.name}
                />
                <div className="cart-item-details">
                  <div className="cart-item-name">{product.name}</div>
                  <div className="cart-item-quantity">
                    Quantity: {cartItem.quantity}
                  </div>
                  <div className="cart-item-price">
                    Price: ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-footer">
          <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
          <button className="checkout-button" onClick={() => console.log(cart)}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
