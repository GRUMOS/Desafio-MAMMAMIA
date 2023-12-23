import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Item = ({ name, price, id, ingredients, img }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);
  const mapIngredientToEmoji = (ingredient) => {
    const emojiMap = {
      mozzarella: "🧀",
      tomates: "🍅",
      jamón: "🍖",
      orégano: "🌿",
      chorizo: "🥩",
      salame: "🍣",
      aceitunas: "🫒",
      champiñones: "🍄",
      bacon: "🥓",
      pimientos: "🌶️",
      choricillo: "🥩",
      "tomates cherry": "🍅", 
      "pollo grillé": "🍗", 
    };

    return emojiMap[ingredient] || ingredient;
  };

  return (
    <div className="item-box">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <div>
        <strong>{name}</strong>
      </div>
      <img src={img} className="img-fluid" width="190" height="180" alt={name} />
      
    <div className="item-ingredients">
     <strong>Ingredientes:</strong>
     <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      {ingredients.map((ingredient, index) => (
         <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
           {mapIngredientToEmoji(ingredient)} {ingredient}
           {index < ingredients.length - 1 && ', '}
         </li>
       ))}
     </ul>
    </div>
      
      <div className="item-price">${price}</div>

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          + Add to cart
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + add more
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          subtract item
        </button>
      )}
    </div>
  );
};
