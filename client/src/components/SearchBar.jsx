import React, { useState } from "react";
import "./SearchBar.css"; // Agrega el archivo CSS para estilos de SearchBar

export default function SearchBar({ searchByName }) {
  const [search, setSearch] = useState("");

  //todo: function handleChange and handleSubmit
  function handleChange(e) {
    const {name, value} = e.target
    setSearch(value);
  }

  function handleSubmit(e) {
    searchByName(search)
    setSearch("")
  }

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        key="search"
        name="search"
        type="text"
        value={search}
        placeholder="...search"
        onChange={handleChange}
      ></input>
      <button className="search-button" onClick={handleSubmit}>
        SEARCH
      </button>
    </div>
  );
}
