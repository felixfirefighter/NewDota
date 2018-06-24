import axios from "axios";
import {
  GET_TEAMS,
  GET_TEAM_MATCHES,
  GET_TEAM_PLAYERS,
  GET_TEAM_HEROES
} from "./types";

// const matchesRes = await axios.get(`/teams/${id}/matches`);
// const playersRes = await axios.get(`/teams/${id}/players`);
// const heroesRes = await axios.get(`/teams/${id}/heroes`);

export const getTeams = () => async dispatch => {
  const res = await axios.get("/teams");
  dispatch({ type: GET_TEAMS, payload: res.data });
};

export const getTeamMatches = id => async dispatch => {
  const res = await axios.get(`/teams/${id}/matches`);
  dispatch({ type: GET_TEAM_MATCHES, payload: res.data });
};

export const getTeamPlayers = id => async dispatch => {
  const res = await axios.get(`/teams/${id}/players`);
  dispatch({ type: GET_TEAM_PLAYERS, payload: res.data });
};

export const getTeamHeroes = id => async dispatch => {
  const res = await axios.get(`/teams/${id}/heroes`);
  dispatch({ type: GET_TEAM_HEROES, payload: res.data });
};
