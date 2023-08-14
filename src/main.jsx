import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail/Detail";
import List from "./routes/List/List";
import Contact from "./routes/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./components/utils/global.context";

import "../scss/custom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/keywords/:keyword" element={<List />} />
          <Route path="/category/:id" element={<List />} />
          {/* <Route path="/product/:id" element={<Detail />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
