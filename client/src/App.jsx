import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  //todo: get a back de products
  useEffect(() => {
    async function initProducts() {
      const { data } = await axios.get("http://localhost:5040/api/products");
      console.log("in App component: ", data);
      if (data.length > 0) setProducts(data);
    }
    initProducts();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home products={products}></Home>}></Route>
        <Route
          path="/detail/:id"
          element={<ProductDetail></ProductDetail>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
