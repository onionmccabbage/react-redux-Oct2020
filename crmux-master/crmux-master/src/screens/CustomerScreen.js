import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomerCard from "../components/customer/CustomerCard";

import {
  interactionList,
  interactionAdd,
  interactionDelete,
  interactionUpdate,
} from "../redux/actions/interactionAction";

import { customerGet, customerDelete, customerUpdate } from "../redux/actions/customerAction";

import InteractionCard from "../components/interactions/InteractionCard";
import { AVATAR_IMAGE_PATH } from ".././utils/constants";
import SkeletonCustomerScreen from "./SkeletonCustomerScreen";

function CustomerScreen(props) {
  const state = useSelector((state) => state);

  const [interactionMode, setInteractionMode] = useState("");
  const [interactionEditId, setInteractionEditId] = useState("");
  const [customerMode, setcustomerMode] = useState("");

  const { interactions } = state.interactionList;
  const interactionsLoading = state.interactionList.loading;

  const { customer, loading, isDeleted } = state.customer;

  const history = useHistory();
  const dispatch = useDispatch();

  // Get the customerId from the query string parameter.
  const customerId = new URLSearchParams(props.location.search).get(
    "customerid"
  );

  // This is just a random integer generator function used
  // to pick a random avatar for the demo.
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  useEffect(() => {
    dispatch(customerGet(customerId));
    dispatch(interactionList(customerId));

    return () => {};
  }, []);

  const deleteCustomerHandler = (customerId) => {
    dispatch(customerDelete(customerId)).then(() =>
      history.push("/customersscreen")
    );
  };

  const updateCustomerHandler = (customerId) => {
    setcustomerMode("edit");
    // history.push("/customermaintenancescreen/?customerId=" + customerId);
  };

  const afterDeleteHandler = () => {
    history.push("/customersscreen");
  };

  // Interactions handlers

  function clearInteractionMode() {
    setInteractionMode("");
    setInteractionEditId("");
  }

  const addInteractionHandler = () => {
    console.log(
      ">>> CustomerScreen.addInteractionHandler customerId=" + customerId
    );
    setInteractionMode("add");
  };

  const saveInteractionHandler = (interaction, mode) => {
    console.log(
      ">>> CustomerScreen.saveInteractionHandler comments=" +
        interaction.comments
    );

    const cleanUp = () =>{
      clearInteractionMode();
      dispatch(interactionList(customerId));
    }

    if (mode == "add") {
      dispatch(interactionAdd(interaction)).then(cleanUp());
    } else if (mode == "edit") {
      interaction.dateTime = "";
      dispatch(interactionUpdate(interaction)).then(cleanUp());
    }
  };

  const cancelInteractionHandler = () => {
    console.log(">>> CustomerScreen.cancelInteractionHandler");
    clearInteractionMode();
    if (interactionMode == "edit") 
      dispatch(interactionList(customerId));
  };

  const saveCustomerHandler = (customer, mode) => {
    console.log(
      ">>> CustomerScreen.saveCustomerHandler" 
    );

    const cleanUp = () =>{
      setcustomerMode("");
      dispatch(customerGet(customerId));
    }

    dispatch(customerUpdate(customer)).then(cleanUp());
  };

  const cancelCustomerHandler = () => {
    console.log(">>> CustomerScreen.cancelCustomerHandler");
    setcustomerMode("");
    dispatch(customerGet(customerId));
  };

  const editInteractionHandler = (id) => {
    console.log(">>> CustomerScreen.editInteractionHandler id=" + id);
    setInteractionMode("edit");
    setInteractionEditId(id);
  };

  const deleteInteractionHandler = (interactionId) => {
    console.log(
      ">>> CustomerScreen.deleteInteractionHandler interactionId = " +
        interactionId
    );

    dispatch(interactionDelete(interactionId))
      .then(dispatch(interactionList(customerId)));
    

  };

  if (loading == true || interactionsLoading == true) {
    return <SkeletonCustomerScreen></SkeletonCustomerScreen>;
  } else if (isDeleted == true) {
    return (
      <>
        <div className="SuccessMessage">Customer deleted.</div>
        <button className="button" onClick={() => afterDeleteHandler()}>
          OK
        </button>
      </>
    );
  } else if (
    loading == false &&
    interactionsLoading == false &&
    customer &&
    interactions
  ) {
    return (
      <>
        <div className="padding">
          <CustomerCard
            customer={customer}
            imagePath={AVATAR_IMAGE_PATH + "/" + getRandomInt(6) + ".png"}
            saveCustomerHandler = {saveCustomerHandler}
            cancelCustomerHandler = {cancelCustomerHandler}
            mode = {customerMode}
          ></CustomerCard>
          <div className="padding"></div>
          <button
            className="button"
            name="button"
            onClick={() => {
              deleteCustomerHandler(customer.id);
            }}
          >
            Delete Customer
          </button>
          <button
            className="button"
            name="button"
            onClick={() => {
              updateCustomerHandler(customer.id);
            }}
          >
            Edit Customer
          </button>

          <button
            className="button"
            name="button"
            onClick={() => {
              addInteractionHandler();
            }}
          >
            Add Interaction
          </button>
          <ul className="interactions">
            {interactionMode == "add" ? (
              <li>
                <InteractionCard
                  className="interactionCard"
                  interaction={{ customerId: customerId }}
                  saveInteractionHandler={saveInteractionHandler}
                  cancelInteractionHandler={cancelInteractionHandler}
                  mode="add"
                ></InteractionCard>
              </li>
            ) : null}
            {interactions
              .sort((a, b) =>
                Date.parse(a.dateTime) == Date.parse(b.dateTime)
                  ? 0
                  : Date.parse(a.dateTime) > Date.parse(b.dateTime)
                  ? -1
                  : 1
              )
              .map((interaction) => {
                return (
                  <li key={interaction.id}>
                    <InteractionCard
                      className="interactionCard"
                      interaction={interaction}
                      editInteractionHandler={editInteractionHandler}
                      deleteInteractionHandler={deleteInteractionHandler}
                      saveInteractionHandler={saveInteractionHandler}
                      cancelInteractionHandler={cancelInteractionHandler}
                      mode={interactionEditId == interaction.id ? "edit" : ""}
                    ></InteractionCard>
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}

export default CustomerScreen;
