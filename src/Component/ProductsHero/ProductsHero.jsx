import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductsHero.scss";

const ProductsHero = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://strapi-store-server.onrender.com/api/products?featured=true"
      )
      .then((res) => setProducts(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="feature">
      <h1>Featured Products</h1>
      <div className="items">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <img src={product.attributes.image} alt={product.attributes.title} />
            <h2>{product.attributes.title}</h2>
            <p>Price: ${product.attributes.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsHero;
