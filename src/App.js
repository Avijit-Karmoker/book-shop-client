import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./components/Admins/Admin";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddBooks from "./components/AddBooks/AddBooks";
import ManageBooks from "./components/ManageBooks/ManageBooks";
import Orders from "./components/Orders/Orders";
import Address from "./components/ManageBooks/Address";

export const UserContext = createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              {loggedInUser && <li> <img src={loggedInUser.photoURL} alt="" /></li>}
            </ul>
          </nav>
          <Switch>
            <PrivateRoute path="/checkout/:_id">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/manageBooks">
              <ManageBooks />
            </PrivateRoute>
            <PrivateRoute path="/addBooks">
              <AddBooks />
            </PrivateRoute>
            <PrivateRoute path="/address">
              <Address />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
