import axios from "axios";
import { GET_MATCHES } from "./types";

export const getTeams = () => async dispatch => {
  const res = await axios.get("/matches");
  dispatch({ type: GET_MATCHES, payload: res.data });
};
