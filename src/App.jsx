import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  // const { state } = useContext(ContextGlobal);
  return (
    <div
      className={`App`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div className="mb-5">
        <Navbar />
      </div>

      <div className="d-flex justify-content-center mx-3 mt-5">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
