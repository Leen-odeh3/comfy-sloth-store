import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductsHero.scss";

const ProductsHero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://strapi-store-server.onrender.com/api/products?featured=true"
      )
      .then((res) => setProducts(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="feature">
      <h1>Featured Products</h1>
      <div className="items">
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.attributes.image}
              alt={product.attributes.title}
            />
            <h2>{product.attributes.title}</h2>
            <p>Price: ${product.attributes.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsHero;
