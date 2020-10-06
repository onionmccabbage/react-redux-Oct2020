//import Axios from "axios";
//import { CUSTOMERS_URI } from "../utils/constants";

module.exports = {
  get: () => {
    return Promise.resolve({
      customers: [
        {
          id: "1",
          firstName: "Alex",
          lastName: "Dinu",
          emailAddress: "Alex.Dinu@here.com",
        },
        {
          id: "2",
          firstName: "Bob",
          lastName: "Marley",
          emailAddress: "Bob.Marley@jamaica.com",
        },
        {
          id: "3",
          firstName: "James",
          lastName: "Bond",
          emailAddress: "James.Bond@mi6.uk",
        },
        {
          id: "4",
          firstName: "Paul",
          lastName: "Atrades",
          emailAddress: "paul.Atrades@dune.com",
        },
        {
          id: "5",
          firstName: "Rogers",
          lastName: "Nelson",
          emailAddress: "Rogers.Nelsony@Paisley.com",
        },
        {
          id: "6",
          firstName: "Audie",
          lastName: "Murphy",
          emailAddress: "audie.murphy@ww2.com",
        },
        {
          id: "7",
          firstName: "Ada",
          lastName: "Lovelace",
          emailAddress: "ada.lopvelace@oop.com",
        },
      ],
    });
  },

  getCustomer: () => {
    return Promise.resolve({
      customer: {
        id: "1",
        firstName: "Alex",
        lastName: "Dinu",
        emailAddress: "Alex.Dinu@here.com",
      },
    });
  },
};
// export async function getCustomers() {

//   // try {
//   //   const { data } = await Axios.post(CUSTOMERS_URI, {});
//   //   //console.log(">>>CartScreen.getNewCartId cartid=" + data.id);
//   //   return data.id;
//   // } catch (error) {
//   //   //.log(">>>CartScreen.updateCartDataStore error=" + error.message);
//   // }
// }
