import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../utils/global.context";

const CartCard = ({ product }) => {
  const { state, removeCart } = useContext(ContextGlobal);

  function handleCart() {
    if (
      state.productCart.filter((prodCart) => prodCart.id === product.id)
        .length > 0
    ) {
      removeCart(product.id);
    }
  }

  return (
    <div className="d-flex">
      <div className="d-flex">
        <div className="d-flex flex-column">
          <p>Producto</p>
          <p>{product.producto}</p>
        </div>
        <div className="d-flex flex-column">
          <p>Precio</p>
          <p>{product.precioEfectivo}</p>
        </div>
        <div className="d-flex flex-column">
          <p>Borrar</p>
          <button className="btn btn-rojodott" onClick={handleCart}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
