import "./Products.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [search,setsearch]=useState("");

  useEffect(() => {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((res) => setProducts(res.data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="products-container">
      <div className="pro">
        <form>
          <input type="text" placeholder="search Product.." onChange={(e)=>setsearch(e.target.value)} />
        </form>
      </div>
      <div className="main">
        {products.filter((product)=>product.attributes.title.includes(search)).map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.attributes.image}
              alt={product.attributes.title}
            />
            <h2>{product.attributes.title}</h2>
            <h5 style={{ display: "inline-block" }}>
              {product.attributes.company}
            </h5>

            <p>Price: ${product.attributes.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
