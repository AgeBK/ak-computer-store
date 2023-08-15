import React from "react";
import Home from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.akComputers}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<Category />} />
          <Route exact path="/:id/:id" element={<Product />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App; 
