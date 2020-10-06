import axios from "axios";
import { INTERACTIONS_URI } from "../utils/constants";

export const getInteractions = async (customerId) => {
  var uri = INTERACTIONS_URI + customerId;
  var data = await axios.get(uri);
  return data.data;
};

export const addInteraction = async (interaction) => {
  var response = await axios.post(INTERACTIONS_URI, interaction);
  return response.data;
};


export const deleteInteraction = async (id) => {
  var response = await axios.delete(INTERACTIONS_URI + id);
  return response.data;
};

export const updateInteraction = async (interaction) => {
  var response = await axios.put(INTERACTIONS_URI, interaction);
  return response.data;
};

