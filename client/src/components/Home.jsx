import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import "./Home.css";

export default function Home({ products }) {
  const [allProducts, setAllProducts] = useState(products || []);
  const [viewProducts, setViewProducts] = useState(products || []);
  //todo: state products

  useEffect(() => {
    setAllProducts(products || []);
    setViewProducts(products || []);
  }, [products]);

  function searchByName(input) {
    const filterProducts = allProducts.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    if (filterProducts.length === 0) alert("no hay productos con ese nombre");
    setViewProducts(filterProducts);
  }

  function reset() {
    setViewProducts(allProducts);
  }

  return (
    <div className="home-container">
      <div className="fixed-components">
        <button className="reset-button" onClick={reset}>
          RESET
        </button>
        <SearchBar searchByName={searchByName} />
      </div>
      <ProductList viewProducts={viewProducts} />
    </div>
  );
}
