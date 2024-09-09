import React, { useState } from "react";

function Item({ name, category }) {
  const [notInCart, setNotInCart] = useState(true);
  function addToCart(){
    setNotInCart(!notInCart)
  }
  const myClass = notInCart ? "" : "in-cart"
  const btnText = notInCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={myClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{btnText}</button>
    </li>
  );
}

export default Item;
