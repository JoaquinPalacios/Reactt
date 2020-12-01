import React from "react";
import ItemList from "../ItemList/ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ({ greeting }) => {
    return(
        <>
            <h1 className="my-3 font-weight-bold text-secondary">Welcome to {greeting}</h1>
            <ItemList />
        </>
)};


export default Home;