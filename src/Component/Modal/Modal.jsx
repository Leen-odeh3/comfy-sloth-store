import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
// import axios from "axios";
import './Modal.scss'

const Modal = () => {
  const { id } = useParams();

  const productId = +id;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://strapi-store-server.onrender.com/api/products/${productId}`);

        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          throw new Error(`Failed to fetch product (Status: ${response.status})`);
        }
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData();
  }, [id]);


  if (!product || !product.attributes || !product.attributes.data) {
    return <h1>Loading ...</h1>;
    
}
else{
  return (
    <div className="p-page">
<img src={product.attributes.image}/>

<div className="infooo">
<h4>{product.attributes.title}</h4>
<p>{product.attributes.company} </p>
<span>${product.attributes.price}</span>
<p>{product.attributes.description}</p>
<button>Add TO Cart</button>
</div>

    </div>

  )}
}

export default Modal
