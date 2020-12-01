import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from 'react-bootstrap';
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = (room) => {
    console.log(room);
    
    return (
        <>            
            <h1 className="my-3 text-secondary">Our Villas</h1>
            <CardGroup>
                <Card className='w-50 mt-5 mb-2'>               
                    <Item room={room} />
                    <ItemCount />
                </Card>
            </CardGroup>        
        </>
     
    );
};

export default ItemDetail;

