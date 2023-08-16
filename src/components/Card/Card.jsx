/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../utils/global.context";

export const Card = ({ product }) => {
  const { state, addCart, removeCart } = useContext(ContextGlobal);
  const [IsHovered, setIsHovered] = useState(false);
  const [IsSelected, setIsSelected] = useState(false);

  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrapBundleMin.Popover(popoverTriggerEl)
  );

  function handleSelected() {
    if (
      state.productCart.filter((prodCart) => prodCart.id === product.id)
        .length > 0
    ) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }

  function handleCart() {
    if (
      state.productCart.filter((prodCart) => prodCart.id === product.id)
        .length > 0
    ) {
      removeCart(product.id);
      setIsSelected(false);
    } else {
      addCart(product);
      setIsSelected(true);
    }
  }

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    var list = document.getElementsByClassName("show");
    for (let item of list) {
      item.classList.remove("show");
    }
    handleSelected();
  }, [product]);

  return (
    <div
      className="card mx-2 mb-2 bg-fondoClaro"
      style={{ width: "15em", minHeight: "15rem" }}
    >
      <div className="card-header d-flex p-0 justify-content-center">
        <p className="m-0 pe-2">Proveedor:</p>
        <p className="m-0">{product.proveedor}</p>
      </div>
      <div className="card-body">
        <div className="d-flex flex-column justify-content-between">
          <p
            className="card-title fw-bold d-flex justify-content-center align-items-center text-center "
            style={{ height: "9rem" }}
          >
            {product.producto}
          </p>
          <div className="card-text text-center">
            <p className="m-0 p-0 ">Precio en Efectivo: </p>
            <p className="">$ {product.precioEfectivo}</p>
          </div>
        </div>

        <div className="d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-evenly">
            {!IsSelected ? (
              <button
                className="btn btn-outline-verdedottclaro "
                type="button"
                id="btn_cart"
                onClick={() => handleCart()}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={
                    IsHovered
                      ? "/icons/shop-cart-hover.png"
                      : "/icons/shop-cart.png"
                  }
                  style={{ width: "30px" }}
                  alt=""
                />
              </button>
            ) : (
              <button
                className="btn btn-outline-rojodott "
                type="button"
                id="btn_cart"
                onClick={() => handleCart()}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={
                    IsHovered
                      ? "/icons/shop-delete-hover.png"
                      : "/icons/shop-delete.png"
                  }
                  style={{ width: "30px" }}
                  alt=""
                />
              </button>
            )}
            <button
              className="btn btn-outline-verdedottclaro  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse_" + product.id}
              aria-expanded="false"
              id="btn_collapse"
            >
              Cuotas
            </button>
          </div>
          <div className="collapse" id={"collapse_" + product.id}>
            <div className="card card-body mt-2 p-0 bg-fondoClaro">
              {product.precioCuotas.map((tipoCuota) => (
                <div
                  key={tipoCuota.CantidadCuotas}
                  className="d-flex border border-success-subtle px-3 py-2 juistify-content-between"
                >
                  <div className="ocultar d-flex w-100">
                    <div className="d-flex flex-column w-100 ">
                      <p className="m-0 p-0  fw-bold">Total:</p>
                      <p className="m-0 p-0  fw-bold">
                        {tipoCuota.CantidadCuotas} de:
                      </p>
                    </div>
                    <div className="d-flex flex-column align-items-end w-100">
                      <p className="m-0 p-0 ">$ {tipoCuota.Total}</p>
                      <p className="m-0 p-0 ">$ {tipoCuota.Cuota}</p>
                    </div>
                  </div>
                  <div
                    className="mostrar w-100 justify-content-between"
                    style={{ display: "none" }}
                  >
                    <div className="d-flex flex-column w-100">
                      <p className="m-0 p-0  fw-bold">Total:</p>
                      <p className="m-0 p-0 ">$ {tipoCuota.Total}</p>
                    </div>
                    <div className="d-flex flex-column w-100">
                      <p className="m-0 p-0  fw-bold">
                        {tipoCuota.CantidadCuotas} de:
                      </p>
                      <p className="m-0 p-0 ">$ {tipoCuota.Cuota}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
