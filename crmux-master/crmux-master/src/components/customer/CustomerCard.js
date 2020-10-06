import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CustomerCard(props) {
  const renderCustomerInfo = () => {
    if(props.mode != "edit" && props.mode != "add")
    {
      return (
        <>
          <div className="customer-name">
            {props.customer.firstName + " " + props.customer.lastName}
          </div>
          <label className="customer-email">{props.customer.emailAddress}</label>
        </>
      );
    }
    else {
      return (
        <>
          <div className="customer-name">
          <textarea placeholder="First Name" onChange = {(e) => props.customer.firstName = e.target.value} rows = {1}>{props.customer.firstName}</textarea>
          <textarea placeholder="Last Name" onChange = {(e) => props.customer.lastName = e.target.value} rows = {1} >{props.customer.lastName}</textarea>
          </div>
          <div className="customer-email">
            <textarea placeholder="Email Address" onChange = {(e) => props.customer.emailAddress = e.target.value} rows = {1} >{props.customer.emailAddress}</textarea>
          </div>
          <div>
            <button
              className="button"
              name="button"
              onClick={() => {
                props.saveCustomerHandler(props.customer, props.mode);
              }}>
              Save
            </button>
            <button
              className="button"
              name="button"
              onClick={() => {
                props.cancelCustomerHandler();
              }}>
              Cancel
            </button>
          </div>
        </>
      );
    }
  }
  const renderCustomerCard = () => {
    return (
      <div className="customer">
        <img
          className="customer-image"
          src={props.imagePath}
          alt={props.customer.emailAddress}
        />
        {renderCustomerInfo()}

        {/* <a
          className="customer-email"
          href={"mailto:" + props.customer.emailAddress}
        >
          {props.customer.emailAddress}
        </a> */}
      </div>
    );
  }
  if(props.mode != "edit" && props.mode != "add"){
    return (
      // Route to the customer screen, sending the customerId as a quert string parameter.
      <Link
        className="link"
        to={{
          pathname: "/customerscreen",
          search: "?customerid=" + props.customer.id,
        }}
      >
        {renderCustomerCard()}
      </Link>
    );
  }
  else {
    return(renderCustomerCard());
  }
}

CustomerCard.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    emailAddress: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
  imagePath: PropTypes.string,
};

export default CustomerCard;
