import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

export default function ProductList({ viewProducts }) {
  return (
    <div className="cards">
      {viewProducts?.map((item) => (
        <div key={item.id} className="card">
          <div className="upbar_card">
            <div className="txt">
              <Link className="linki" to={`/detail/${item.id}`}>
                <div>
                  <h3>{item.title}</h3>
                  <p>u$ {item.price}</p>
                </div>
                <img
                  className="img-container"
                  src={item.image}
                  alt={item.title}
                ></img>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
