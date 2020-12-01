import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import { Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Switch, Route } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Bookings from "../Cart/Cart";


const NavBar = () => (
  <div>
    <NavbarBootstrap bg="light" variant="light">
        <NavbarBootstrap.Brand href="/">Saint Tropez Resort</NavbarBootstrap.Brand>
        <Nav className="mr-auto">
          <NavLink className="mx-3" to="/aboutUs">About us</NavLink>
          <NavLink className="mx-3" to="/rooms">Our Villas</NavLink>
          <NavLink className="mx-3" to="/location">Location</NavLink>
        </Nav>   
        <NavLink className="mx-3" to="/bookings"><CartIcon /></NavLink>
 
      </NavbarBootstrap>

      <Switch>        
        <Route path="/aboutUS" />          
        <Route path="/rooms">
          <ItemDetail />
        </Route>
        <Route path="/location" >
          <h3>A la vuelta</h3>
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
        {/* <Route path="/rooms/:roomId" component={FullDescription} />         */}
      </Switch>
  </div>
      
);

export default NavBar;