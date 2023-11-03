import  { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Modal = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-product">
      <div style={{ display: "flex" }}>
        <Link to="/products">Back to Products</Link>
      </div>
      <div>
        <h2>{product.attributes.name}</h2>
        <p>{product.attributes.description}</p>
    leen
      </div>
    </div>
  );
};

export default Modal;
