// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table } from 'react-bootstrap';
// import Rooms from "../Rooms/Rooms";



// const FullDescription = (props) => {
//   let id = props.match.params.id;
//   const { roomType, description, img } = (Rooms && Rooms[id - 1]);

//   return (
//     <Table responsive>
//       <thead>
//         <tr>
//           <th> Room Type </th>
//           <th> Description </th>
//           <th> Image </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>
//             <h5> {roomType} </h5>
//           </td>
//           <td>
//             <p> {description} </p>
//           </td>
//           <td>
//             <img src={img} alt="img" />
//           </td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default FullDescription;