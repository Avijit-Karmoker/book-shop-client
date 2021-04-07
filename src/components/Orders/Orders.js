import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Orders = () => {
  let { _id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>OrderSummary</h1>
      <div style={{display: "flex", width: "95%", margin: "auto"}}>
        {order.map((info) => (
          <div style={{ display: "flex", width: "30%" }}>
            <div>
              <img src={info.image} alt="img" />
            </div>
            <div>
              <h4>Name: {info.shipment.Name}</h4>
              <h5>Email: {info.shipment.Email}</h5>
              <p>Order id: {info._id}</p>
            </div>
          </div>
        ))}
      </div>
      <p style={{textAlign: "center"}}> <strong>{order.length} items (s) in your bag</strong> </p>
    </div>
  );
};

export default Orders;
