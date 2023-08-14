import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Categorys = () => {
  // const { state } = useContext(ContextGlobal);
  const [categorys, setCategorys] = useState([]);

  const getCategorys = async () => {
    const data = localStorage.getItem("categorys");
    setCategorys(data.split(","));
  };

  useEffect(() => {
    getCategorys();
  }, []);

  return (
    <div
      className="d-flex flex-column rounded-3 border border-3 overflow-y-auto "
      style={{ overflowX: "hidden", minWidth: "250px", height: "fit-content" }}
    >
      <div>
        <p className="text-center fs-5">Categorias</p>
      </div>
      <div>
        {categorys?.map((category, index) => {
          return category != "No existe una categoria para este producto" ? (
            <div key={index}>
              <Link
                to={`/category/${category}`}
                style={{ textDecoration: "none" }}
              >
                <p className="text-success m-0 px-4 categoryHover">
                  {category}
                </p>
              </Link>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Categorys;
