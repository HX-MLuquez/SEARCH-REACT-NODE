import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css"; // Agrega el archivo CSS para los estilos

export default function ProductDetail() {

  //todo: obtener id y setear product
  const {id} = useParams()
 
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function productDetail() {
      const { data } = await axios.get(`http://localhost:5040/api/detail?id=${id}`);
      if (data) setProduct(data);
    }
    productDetail();
  }, []);

  return (
    <div className="product-detail-container">
      <Link to="/" className="home-link">
        <button className="home-button">Home</button>
      </Link>
      <div className="product-info">
        <h2 className="product-title">{product?.title}</h2>
        <p className="product-price">{product?.price}</p>
        <div className="product-image-container">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
        </div>
        <p className="product-description">{product?.description}</p>
        <p className="product-stock">Stock: {product?.stock}</p>
        <p className="product-condition">Condition: {product?.condition}</p>
      </div>
    </div>
  );
}
