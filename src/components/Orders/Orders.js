import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Orders = () => {
  let { _id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-brook-66929.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>OrderSummary</h1>
      <p style={{textAlign: "center"}}> <strong>{order.length} items (s) in your bag</strong> </p>
    </div>
  );
};

export default Orders;
