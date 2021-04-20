import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import './Address.css';

const Address = () => {
  const history = useHistory();
  let { _id } = useParams(); 
  const { register, handleSubmit, watch, errors } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const email = loggedInUser.email;
  const name = loggedInUser.displayName;
  const imageURL = loggedInUser.photoURL;
  const onSubmit = (data) => {
    const orderDetails = { name: name, email: email, image: imageURL, products: _id, shipment: data, orderTime: new Date()};

    fetch('https://mysterious-brook-66929.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        alert('Your Order Placed Successfully');
      }
    })

    history.push('/orders');
  };
  return (
    <div className="address-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Name" {...register("Name")} className="info" />
        <input defaultValue="Email" {...register("Email")} className="info" />
        <input defaultValue="Address" {...register("Address")} className="info" />
        <input defaultValue="Phone" {...register("Phone")} className="info" />
        <input type="submit" value="Save" className="button1"/>
      </form>
    </div>
  );
};

export default Address;
