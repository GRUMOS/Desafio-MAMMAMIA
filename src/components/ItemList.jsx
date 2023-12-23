import React from "react";
import pizzas from "../data/pizzas.json";
import { Item } from "./Item";

export const ItemList = () => {
  return (
    <div className="items-list">
      {pizzas.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};
