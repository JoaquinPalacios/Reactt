import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";



const App = () => (  
    <BrowserRouter>
    <div className="App container">
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home greeting="SAINT TROPEZ RESORT"/>
        </Route>
        <Route path = "/rooms/:roomID">
        <ItemDetailContainer />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    
    
  );

export default App;
