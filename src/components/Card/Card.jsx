/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect } from "react";

export const Card = ({ product }) => {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrapBundleMin.Popover(popoverTriggerEl)
  );

  useEffect(() => {
    var list = document.getElementsByClassName("show");
    for (let item of list) {
      item.classList.remove("show");
    }
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
            className="card-title fw-bold d-flex justify-content-center align-items-center text-center"
            style={{ height: "5rem" }}
          >
            {product.producto}
          </p>
          <div className="card-text text-center">
            <p className="m-0 p-0">Precio en Efectivo: </p>
            <p>$ {product.precioEfectivo}</p>
          </div>
        </div>

        <div className="d-flex justify-content-center flex-column">
          <button
            className="btn btn-outline-verdedottclaro"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse_" + product.id}
            aria-expanded="false"
            id="btn_collapse"
          >
            Ver mas info
          </button>
          <div className="collapse" id={"collapse_" + product.id}>
            <div className="card card-body mt-2 p-0 bg-fondoClaro">
              {product.precioCuotas.map((tipoCuota) => (
                <div
                  key={tipoCuota.CantidadCuotas}
                  className="d-flex border border-success-subtle px-3 py-2 juistify-content-between"
                >
                  <div className="d-flex flex-column w-100">
                    <p className="m-0 p-0">Total:</p>
                    <p className="m-0 p-0">{tipoCuota.CantidadCuotas} de:</p>
                  </div>
                  <div className="d-flex flex-column align-items-end w-100">
                    <p className="m-0 p-0">$ {tipoCuota.Total}</p>
                    <p className="m-0 p-0">$ {tipoCuota.Cuota}</p>
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
