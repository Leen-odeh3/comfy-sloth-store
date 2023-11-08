import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import './Modal.scss'

const Modal = () => {
  const {id}=useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => setProduct(res.data.data))
      .catch((error) => console.error(error));
  });


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

  )
}

export default Modal
