import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rooms from "../../Rooms";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams  } from "react-router-dom";

const datos = (roomID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Rooms.find((product) => product.roomId===parseInt(roomID)));
        },3000);
    });
};
const ItemDetailContainer = () => {      
    const { roomID } = useParams();
    const [loading, setLoading] = useState(true);
    const [room, setRoom] = useState(null);
    useEffect(() => {
        datos(roomID).then((product) => {
        setRoom(product);
        setLoading(false);
      });
    }, []);   
    
    return (
        <>
           {loading ? <div>loading...</div>
            : <ItemDetail room={room}  />
            }
        </>
    );           
};  

export default ItemDetailContainer;

