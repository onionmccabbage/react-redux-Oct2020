// import React from "react";
// import PropTypes from "prop-types";
// import { Menu, Button, MenuItem } from "@material-ui/core";

// function InteractionListItem(props) {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <div>{props.interaction.date}</div>
//       <div>{props.interaction.comments}</div>
//       <div>
//         <Button
//           aria-controls="simple-menu"
//           aria-haspopup="true"
//           onClick={handleClick}
//         >
//           ...
//         </Button>
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           keepMounted
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Edit</MenuItem>
//           <MenuItem onClick={handleClose}>Delete</MenuItem>
//         </Menu>
//       </div>
//     </div>
//   );
// }

// InteractionListItem.propTypes = {
//   interaction: PropTypes.object,
// };

// export default InteractionListItem;
