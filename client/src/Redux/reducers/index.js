import {
  ADD_DOG,
  GET_ALL_DOGS,
  GET_DOG_BY_QUERY,
  GET_DOG_DETAIL,
  CLEAN_DOG_DETAIL,
  UPDATE_DOGS,
  TEMPERAMENT,
} from "../actions/index";

const initialState = {
  allDogs: [],
  dogDetail: {},
  temperaments: [],
  filterDogTemp: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: payload,
        filterDogTemp: payload,
      };
    case UPDATE_DOGS:
      return {
        ...state,
        filterDogTemp: payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: payload,
      };
    case GET_DOG_BY_QUERY:
      return {
        ...state,
        filterDogTemp: payload,
      };
    case ADD_DOG:
      return {
        ...state,
        allDogs: [...state.allDogs, payload],
        filterDogTemp: [...state.filterDogTemp, payload],
      };
    case CLEAN_DOG_DETAIL:
      return {
        ...state,
        dogDetail: payload,
      };
    case TEMPERAMENT:
      return {
        ...state,
        temperaments: payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
