import axios from "axios";
import { ALL_SERVER_DOGS } from "../../constants";
import { allTemperaments } from "../../AuxRequests/AuxRequests";

export const ADD_DOG = "ADD_DOG";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG_BY_QUERY = "GET_DOG_BY_QUERY";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const CLEAN_DOG_DETAIL = "CLEAN_DOG_DETAIL";
export const UPDATE_DOGS = "UPDATE_DOGS";
export const TEMPERAMENT = "TEMPERAMENT";

export const getDogsByQuery = (name) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${ALL_SERVER_DOGS}?name=${name}`);
    dispatch({
      type: GET_DOG_BY_QUERY,
      payload: data,
    });
  };
};

export const getAllDogs = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${ALL_SERVER_DOGS}`);
    dispatch({
      type: GET_ALL_DOGS,
      payload: data,
    });
  };
};

// enviar peticion a al back no a la api.
const getDogs = async (id) => {
  if (id.includes("-")) {
    const { data } = await axios.get(`${ALL_SERVER_DOGS}/${id}`);
    return data;
  }
  const { data } = await axios.get(`${ALL_SERVER_DOGS}/${id}`);
  return data;
};

export const getDogDetail = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_DOG_DETAIL,
      payload: await getDogs(id),
    });
  };
};

export const cleanDogDetail = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAN_DOG_DETAIL,
      payload: {},
    });
  };
};

export const updateAllDogs = (array) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_DOGS,
      payload: array,
    });
  };
};
//veeeeeeeeeer add dog
export const addNewDog = (body) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "post",
        url: ALL_SERVER_DOGS,
        data: body,
      });

      dispatch({
        type: ADD_DOG,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    dispatch({
      type: TEMPERAMENT,
      payload: await allTemperaments(),
    });
  };
};
