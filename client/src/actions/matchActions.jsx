import axios from "axios";
import { GET_PRO_MATCHES, GET_PUBLIC_MATCHES, GET_MATCH } from "./types";

export const getProMatches = () => async dispatch => {
  const res = await axios.get("/proMatches");
  dispatch({ type: GET_PRO_MATCHES, payload: res.data });
};

export const getPublicMatches = () => async dispatch => {
  const res = await axios.get("/publicMatches");
  dispatch({ type: GET_PUBLIC_MATCHES, payload: res.data });
};

export const getMatch = id => async dispatch => {
  const res = await axios.get(`/matches/${id}`);
  dispatch({ type: GET_MATCH, payload: res.data });
};
