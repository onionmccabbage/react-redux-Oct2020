import { ADD_ARTICLE } from "../constants/action-types";
import { SET_TITLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
export function setTitle(payload) {
  return { type: SET_TITLE, payload };
}