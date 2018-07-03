import { GET_HEROES, GET_HERO_STATS } from "../actions/types";

const initial = {
  heroes: [],
  stats: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_HEROES:
      return { ...state, heroes: action.payload };
    case GET_HERO_STATS:
      return { ...state, stats: action.payload };
    default:
      return state;
  }
};
