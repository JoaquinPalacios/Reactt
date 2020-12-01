import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';



const ItemCount = () => {
  const [count, setCount] = useState(0);
  
  const addMore = () => {
    if (count === 10) {
      console.log(count);
      return;
    }
    setCount(count + 1);
  };
  
  const addLess = () => {
    if (count === 0) {
      console.log(count);
      return;
    }
    setCount(count - 1);
  };
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="info">Book Online {count}</Button>
        <Button onClick={addLess} variant="outline-info" className="font-weight-bold">-</Button>
        <p className="bg-light px-3 mt-2 text-secondary">  {count}  </p>
        <Button onClick={addMore} variant="outline-info" className="font-weight-bold">+</Button>
      </ButtonGroup>     
    </div>
  );
}

export default ItemCount;