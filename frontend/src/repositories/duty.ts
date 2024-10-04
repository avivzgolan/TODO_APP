import axios from "axios";
import { BACKEND_URL } from "../constants";

export const dutyRepository = axios.create({
  baseURL: `${BACKEND_URL}/duties`,
});
