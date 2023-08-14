import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [categorys, setCategorys] = useState([]);
  const [keywords, setKeywords] = useState("");

  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`/list/keywords/${keywords}`);
  }

  const getCategorys = async () => {
    const data = localStorage.getItem("categorys");
    setCategorys(data.split(","));
  };

  const handleInputChange = (e) => {
    setKeywords(e.target.value);
  };

  useEffect(() => {
    getCategorys();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-fondoOscuro fixed-top py-3">
      <div className="container-fluid">
        <a className="navbar-brand text-verdedott" href="/home">
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
                className="nav-link dropdown-toggle active text-verdedott"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul
                className="dropdown-menu overflow-y-auto overflow-x-hidden bg-fondoClaro "
                style={{ height: "700px" }}
              >
                {categorys?.map((category, index) => {
                  return category !=
                    "No existe una categoria para este producto" ? (
                    <li key={index}>
                      <a
                        className="dropdown-item text-verdedott"
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
              <a className="nav-link active text-verdedott" href="/list">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-verdedott"
                aria-current="page"
                href="/contact"
              >
                Contacto
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 inputdott"
              type="text"
              placeholder="Buscar producto"
              aria-label="Buscar producto"
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-verdedottclaro" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
