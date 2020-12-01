import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Item from "../Item/Item";
import Rooms from "../../Rooms";


const datos = new Promise ((resolve) =>
setTimeout(() => {
  resolve(Rooms);
}, 2000)
);
const ItemList = () => {
    const [list, setList] = useState([]);
    useEffect(() => datos.then(setList), []);
  
    return (
      <Card className="w-50 mt-5 mb-2">
        <Card.Header as="h3" className="bg-secondary text-light">
          Our Villas
        </Card.Header>
        {list.map((product) => (
          <Item key={product.roomId} room={product} />
        ))}
      </Card>
    );
  };
  
  export default ItemList;

  
// const ItemList = () => {
//     const datos = new Promise((resolve) =>
//     setTimeout(() => {
//     resolve(Rooms);
//     }, 2000)
//     );
    
//     const [list, setList] = useState([]);
//     useEffect(() => datos.then(setList), [datos]);
    
    
//     return (
//         <Card className='w-50 mt-5 mb-2'>
//             <Card.Header as='h3' className='bg-secondary text-light'>
//               Our Villas
//             </Card.Header>
//             {list.map(product => <Item key={product.roomId} room={product} />)}
//         </Card>
//     );
// };    

// export default ItemList;