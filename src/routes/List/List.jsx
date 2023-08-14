import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Categorys from "../../components/Category/Categorys";

const List = () => {
  const { id, keyword } = useParams();

  const [productList, setProductList] = useState([]);
  const [pagina, setPagination] = useState(1);
  const [orderBy, setorderBy] = useState("");
  const [ordenadoPor, setOrdenadoPor] = useState("");

  function handlePagination(action, cant) {
    switch (action) {
      case "reducir":
        if (pagina > 1) {
          setPagination(pagina - 1);
        }
        break;
      case "aumentar":
        setPagination(pagina + 1);
        break;
      case "cambiar":
        setPagination(cant);
        break;
      default:
        break;
    }
  }

  function handleOrder(action) {
    switch (action) {
      case "mayor":
        setorderBy(action);
        setOrdenadoPor("Mayor Precio");
        break;
      case "menor":
        setorderBy(action);
        setOrdenadoPor("Menor Precio");
        break;
      case "nombreAsc":
        setorderBy(action);
        setOrdenadoPor("Nombre, A - Z");
        break;
      case "nombreDesc":
        setorderBy(action);
        setOrdenadoPor("Nombre, Z - A");
        break;
      default:
        break;
    }
  }

  const getProductList = async () => {
    handleLoading(true);
    const resp = await fetch(
      `https://dottpc-api.onrender.com/productos?&skip=${pagina}&take=20&orderBy=${orderBy}`
    );
    const data = await resp.json();
    setProductList(data);
    handleLoading(false);
  };

  const getProductListByCategory = async () => {
    handleLoading(true);
    const resp = await fetch(
      `https://dottpc-api.onrender.com/productos/categoria?category=${id}&skip=${pagina}&take=20&orderBy=${orderBy}`
    );
    const data = await resp.json();
    setProductList(data);
    handleLoading(false);
  };

  const getProductListByKeywords = async () => {
    handleLoading(true);
    const resp = await fetch(
      `https://dottpc-api.onrender.com/productos/buscarPorPalabrasClaves?keywords=${keyword}`
    );
    const data = await resp.json();
    setProductList(data);
    handleLoading(false);
  };

  function handleLoading(mostrar) {
    if (mostrar) {
      document.getElementById("productsGrid").classList.add("d-none");
      document.getElementById("loader").classList.remove("d-none");
    } else {
      document.getElementById("productsGrid").classList.remove("d-none");
      document.getElementById("loader").classList.add("d-none");
    }
  }

  useEffect(() => {
    if (id != null && id != undefined) {
      getProductListByCategory();
    } else if (keyword != null && keyword != undefined) {
      getProductListByKeywords();
    } else {
      getProductList();
    }
  }, [pagina, id, keyword, orderBy]);

  return (
    <div className="w-100 d-flex">
      <Categorys />

      <div
        className="w-100 d-flex justify-content-center"
        style={{ height: "fit-content", marginTop: "25%" }}
        id="loader"
      >
        <div
          className="spinner-border text-verdeoscurodott"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <div
        className="d-flex flex-wrap justify-content-center w-100"
        id="productsGrid"
      >
        <div
          className="dropdown w-100 d-flex justify-content-between mx-5 mb-3"
          style={{ height: "50px" }}
        >
          <div className="d-flex align-items-center">
            <p className="fw-bold fs-5 text-verdeoscurodott m-0 p-0">
              {id ? id : "Todos los productos"}
            </p>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-verdedottclaro dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ height: "35px" }}
            >
              Ordenar por
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleOrder("mayor")}
                >
                  Mayor Precio
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleOrder("menor")}
                >
                  Menor Precio
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleOrder("nombreAsc")}
                >
                  Nombre Asc
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleOrder("nombreDesc")}
                >
                  Nombre Desc
                </a>
              </li>
            </ul>
            <p className="text-verdedottclaro p-0 m-0 ms-2">
              {ordenadoPor ? ordenadoPor : "-"}
            </p>
          </div>
        </div>
        {productList.map((product, index) => (
          <Card key={index} product={product} />
        ))}
        <div className="d-flex w-100 justify-content-center">
          {productList.length == 20 && (
            <Pagination
              parametrosPaginado={handlePagination}
              paginaActual={pagina}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
