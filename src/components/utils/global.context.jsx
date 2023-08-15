import { createContext, useReducer, useMemo, useEffect } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(undefined);

function reducer(state, action) {
  switch (action.type) {
    case "toggle_theme":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "set_data":
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("./api/productos/categorias");
      const convert = await data.json();
      localStorage.setItem("categorys", convert);

      dispatch({
        type: "set_data",
        data: convert,
      });
    };
    getData();
  }, []);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
