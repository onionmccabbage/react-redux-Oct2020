// import React, { useEffect, useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
// import InteractionMaintenanceComponent from "./InteractionMaintenanceComponent";

// function InteractionMaintenanceContainer(props) {
//   const history = useHistory();
//   //const { customerId, interactionId, comment } = useParams();
//   const customerId = new URLSearchParams(props.location.search).get(
//     "customerid"
//   );

//   const interactionId = new URLSearchParams(props.location.search).get(
//     "interactionid"
//   );

//   const onButtonClickHandler = (comment) => {
//     console.log(
//       ">>>InteractionMaintenanceContainer.onButtonClickHandler comment=" +
//         comment
//     );

//     history.push({
//       pathname: "/customerscreen",
//       search:
//         "?customerid=" +
//         props.customerId +
//         "&interactionid=" +
//         props.interactionId +
//         "&comment=" +
//         comment,
//     });
//   };

//   // const submitHandler = (e) => {
//   //   e.preventDefault();
//   //   // dispatch(saveShipping({ address, city, postalCode, country, state }));
//   //   // props.history.push("/payment");
//   //   console.log(">>>InteractionMaintenance.submitHandler comment=" + comment);
//   // };
//   useEffect(() => {
//     //console.log(">>>InteractionMaintenance.useEffect");
//     console.log(
//       ">>>InteractionMaintenanceContainer.useEffect customerId=" +
//         customerId +
//         ", interactionId=" +
//         interactionId
//     );
//     return () => {};
//   }, []);

//   return (
//     <InteractionMaintenanceComponent
//       interactionId={interactionId}
//       onButtonClickHandler={onButtonClickHandler}
//     ></InteractionMaintenanceComponent>
//     // <div>
//     //   <h1>Interaction maintenance screen</h1>
//     //   <h2 className="text-center">
//     //     {interactionid ? "Edit Interaction" : "New Interaction"}
//     //   </h2>
//     //   <form onSubmit={submitHandler}>
//     //     <div className="form-group">
//     //       <label htmlFor="comment">Comment</label>
//     //       <input
//     //         type="text"
//     //         name="comment"
//     //         id="comment"
//     //         onChange={(e) => setComment(e.target.value)}
//     //       ></input>
//     //     </div>

//     //     <button className="btn btn-success">
//     //       {interactionid ? "Update" : "Create"}
//     //     </button>
//     //   </form>
//     // </div>
//   );
// }

// InteractionMaintenanceContainer.propTypes = {};

// export default InteractionMaintenanceContainer;
