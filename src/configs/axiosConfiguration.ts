import axios from "axios";
import { appConfiguration } from "./appConfiguration";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST,PATCH, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export const api = axios.create({
  baseURL: appConfiguration.BASE_URL,
  timeout: 10000,
  headers,
});
