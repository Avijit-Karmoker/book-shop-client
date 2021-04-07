import { Button} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(result => {
      console.log('deleted successfully');
    })
  }
  return (
    <div style={{width: "90%", margin: "auto", textAlign: 'center', fontWeight: "700"}}>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
      {
          books.map(book => <tbody>
            <tr>
              <td>{book.BookName}</td>
              <td>{book.WriterName}</td>
              <td>{book.Price}</td>
              <td><Button><AddIcon /></Button><Button onClick={() => handleDelete(book._id)}><DeleteIcon /></Button></td>
            </tr>
          </tbody>)
      }
      </Table>
    </div>
  );
};

export default ManageBooks;
