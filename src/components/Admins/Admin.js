import { Button } from "@material-ui/core";
import React from "react";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from "react-router";


const Admin = () => {
  const history = useHistory();

  const handleAddBook = () => {
    history.push('/addBooks');
  }

  const handleManageBooks = () => {
    history.push('/manageBooks');
  }
  
  return (
    <div>
      <div>
        <h1>Book Shop</h1>
        <Button variant="contained" onClick={handleManageBooks}><DashboardIcon /> Manage books</Button><br />
        <Button variant="contained" onClick={handleAddBook}><AddIcon /> Add Book</Button><br />
        <Button variant="contained"><EditIcon /> Edit book</Button>
      </div>
    </div>
  );
};

export default Admin;
