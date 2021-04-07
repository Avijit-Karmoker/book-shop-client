import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './CheckOut.css';

const CheckOut = () => {
  let { _id } = useParams();
  const [book, setBook] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, []);

  const handleConfirm = () => {
    history.push('/address')
  }

  return (
    <div className="checkOut">
      <h1>CheckOut</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr style={{ color: "#828282" }}>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {book.map((bk) => (
                <td>
                  <strong>{bk.BookName}</strong>
                </td>
              ))}
              <td><strong>{book.length}</strong></td>
              {book.map((bk) => <td><strong>{bk.Price}</strong></td>)}
            </tr>
            <tr>
              <td colSpan="2"><strong>Total</strong></td>
              {book.map((bk) => <td><strong>{bk.Price}</strong></td>)}
            </tr>
          </tbody>
        </Table>
        <button onClick={handleConfirm} className="button1">Confirm</button>
      </div>
    </div>
  );
};

export default CheckOut;
