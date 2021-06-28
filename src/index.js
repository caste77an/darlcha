import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Poster from "./components/Poster";
import Products from "./components/Products";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Poster />
    <Products />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
