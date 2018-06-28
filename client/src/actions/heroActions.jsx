import axios from "axios";
import { GET_HEROES } from "./types";

export const getHeroes = () => async dispatch => {
  const res = await axios.get("/heroes");
  dispatch({ type: GET_HEROES, payload: res.data });
};
