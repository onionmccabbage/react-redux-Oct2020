import React, { useState } from "react";
import PropTypes from "prop-types";

function InteractionMaintenanceComponent(props) {
  const [comment, setComment] = useState("");
  //const { customerId, interactionId } = useParams();

  const updateInteraction = () => {
    console.log(
      ">>> InteractionMaintenanceComponent.updateInteraction : " +
        "/interaction/" +
        props.customerId +
        "/" +
        props.interactionId +
        "/" +
        comment
    );
    props.onButtonClickHandler(comment);
  };
  return (
    <div>
      <h2 className="text-center">
        {props.interactionId ? "Edit Interaction" : "New Interaction"}
      </h2>
      <form>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            name="comment"
            id="comment"
            onChange={(e) => setComment(e.target.value)}
          ></input>
        </div>

        <button
          className="btn btn-success"
          onClick={() => {
            // props.onButtonClickHandler(comment);
            updateInteraction();
          }}
        >
          {props.interactionId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

InteractionMaintenanceComponent.propTypes = {
  interactionId: PropTypes.string,
  customerId: PropTypes.string,
  onButtonClickHandler: PropTypes.func.isRequired,
};

export default InteractionMaintenanceComponent;
