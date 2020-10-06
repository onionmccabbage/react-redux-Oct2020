// import React from "react";
// import PropTypes from "prop-types";
// import CustomerCard from "./CustomerCard";

// function Customers(props) {
//   const imagePath = "../images/avatars";

//   function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

//   return (
//     <>
//       <ul className="customers">
//         {props.customers.map((customer) => (
//           <li key={customer.id}>
//             <CustomerCard
//               customer={customer}
//               imagePath={imagePath + "/" + getRandomInt(6) + ".png"}
//               deleteCustomerHandler={deleteCustomerHandler}
//               updateCustomerHandler={updateCustomerHandler}
//             ></CustomerCard>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// Customers.propTypes = {
//   customers: PropTypes.array,
// };

// export default Customers;
