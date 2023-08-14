import React, { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const [categorys, setCategorys] = useState([]);

  const getCategorys = async () => {
    const data = localStorage.getItem("categorys");
    setCategorys(data.split(","));
  };

  useEffect(() => {
    getCategorys();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle fixed-top py-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          DottPC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul
                className="dropdown-menu overflow-y-auto overflow-x-hidden"
                style={{ height: "700px" }}
              >
                {categorys?.map((category, index) => {
                  return category !=
                    "No existe una categoria para este producto" ? (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href={`/category/${category}`}
                      >
                        {category}
                      </a>
                    </li>
                  ) : (
                    ""
                  );
                })}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/list">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/contact"
              >
                Contacto
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar producto"
              aria-label="Buscar producto"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
