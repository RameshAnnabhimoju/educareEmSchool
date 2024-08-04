import axios from "axios";
import { appConfiguration } from "./appConfiguration";

const headers = {
  "Access-Control-Allow-Origin": "*",
};
export const api = axios.create({
  baseURL: appConfiguration.BASE_URL,
  timeout: 10000,
  headers,
});
