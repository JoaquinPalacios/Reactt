import React from 'react';
import { Card, CardDeck } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink  } from "react-router-dom";


const Item = ({ room: { roomId, roomType, description, img } }) => {
    return (
    <>
      <CardDeck>
        <Card style={{  width: '50' }}>        
        <Card.Img variant="top" src={img} alt="image"/>
        <Card.Body>
          <Card.Title as='h4' className="text-secondary">{roomType}</Card.Title>
          <Card.Text className="justify-text-around">
            {description}
          </Card.Text>           
          <NavLink to={`/rooms/${roomId}`}>Click for more details</NavLink>          
        </Card.Body>        
        <Card.Footer className="text-muted">
        SAINT TROPEZ RESORT
        </Card.Footer>    
        </Card>
        </CardDeck>
    </>
    );
};
    

export default Item;