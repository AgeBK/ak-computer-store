import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import Home from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";
// import styles from "./App.module.css";

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Category />} />
        <Route exact path="/:id/:id" element={<Product />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
