import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      className="d-flex flex-column rounded-3 overflow-y-auto borderCategory ocultar"
      style={{
        overflowX: "hidden",
        minWidth: "250px",
        height: "fit-content",
      }}
    >
      <div className="d-flex align-items-center justify-content-center py-2">
        <p className="text-center fs-5 m-0 p-0 text-verdeoscurodott">
          Categorias
        </p>
      </div>
      <div>
        {categorys?.map((category, index) => {
          return category != "No existe una categoria para este producto" ? (
            <div key={index}>
              <Link
                to={`/category/${category}`}
                style={{ textDecoration: "none" }}
              >
                <p className="text-verdedottclaro m-0 px-4 categoryHover">
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
