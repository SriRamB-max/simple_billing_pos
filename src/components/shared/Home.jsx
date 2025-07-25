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
    setProducts((prevProduct) => [...prevProduct, formData]);
    setFormData({ product: '', quantity: '', price: '' });
  };


  return (
    <>
      <div className="container-fluid">
        <div className="container m-0 border rounded">
          <h1 className="ps-1 p-3">Simple Billing POS</h1>
          <input name="product" value={formData.product} onChange={handleChange} type="text" className="form-control mb-2 pt-3" placeholder="Name of the Product" />
          <input name="quantity" value={formData.quantity} onChange={handleChange} type="number" className="form-control mb-2 pt-3" placeholder="Quantity" />
          <input name="price" value={formData.price} onChange={handleChange} type="number" className="form-control mb-2 pt-3" placeholder="₹ Price" />
          <button onClick={handleSubmit} className="btn btn-md bg-success m-4 px-5">Add</button>
          <Link to={"/billing"}>
            <button className="btn btn-md bg-success m-4 px-3 ">Generate Bill</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home