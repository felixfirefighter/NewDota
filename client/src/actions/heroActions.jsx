import axios from "axios";
import { GET_HEROES, GET_HERO_STATS } from "./types";

export const getHeroes = () => async dispatch => {
  const res = await axios.get("/heroes");
  dispatch({ type: GET_HEROES, payload: res.data });
};

export const getHeroStats = () => async dispatch => {
  const res = await axios.get("/heroStats");
  dispatch({ type: GET_HERO_STATS, payload: res.data });
};
