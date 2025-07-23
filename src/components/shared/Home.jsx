import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import './Home.css'

const Home = () => {
  const { setProducts } = useContext(UserContext);
  const [formData, setFormData] = useState({ product: '', quantity: '', price: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prevProduct) =>  [...prevProduct, formData]);
    setFormData({ product: '', quantity: '', price: '' });
  };
  

  return (
    <>
      <div className="container m-0">
        <h1 className="ps-1">Simple Billing POS</h1>
          <input name="product" value={formData.product} onChange={handleChange} type="text" className="form-control w-75 mb-2" placeholder="Name of the Product" />
          <input name="quantity" value={formData.quantity} onChange={handleChange} type="number" className="form-control w-75 mb-2" placeholder="Quantity" />
          <input name="price" value={formData.price} onChange={handleChange} type="number" className="form-control w-75 mb-2" placeholder="₹ Price" />
          <button onClick={handleSubmit} className="btn btn-md bg-success mt-3 px-5 ms-1 ">Add</button>
        <Link to={"/billing"}>
          <button className="btn btn-md bg-success mt-3 ms-2 px-3 ">Generate Bill</button>
        </Link> 
      </div>
    </>
  )
}

export default Home