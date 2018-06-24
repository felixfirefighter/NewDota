import {
  GET_TEAMS,
  GET_TEAM_MATCHES,
  GET_TEAM_PLAYERS,
  GET_TEAM_HEROES
} from "../actions/types";

const initial = {
  teams: [],
  matches: [],
  players: [],
  heroes: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return { ...state, teams: action.payload };
    case GET_TEAM_MATCHES:
      return { ...state, matches: action.payload };
    case GET_TEAM_PLAYERS:
      return { ...state, players: action.payload };
    case GET_TEAM_HEROES:
      return { ...state, heroes: action.payload };
    default:
      return state;
  }
};
