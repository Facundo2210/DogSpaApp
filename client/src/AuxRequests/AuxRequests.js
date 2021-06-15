import axios from "axios";
import { TEMPERAMENTS } from "../constants";

export const allTemperaments = async () => {
  let { data } = await axios.get(`${TEMPERAMENTS}`);
  return data;
};
