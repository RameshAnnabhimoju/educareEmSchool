const environment = {
  prod: "production",
  dev: "development",
};
// change here to chage the environment to prod or dev
const ENVIRONMENT = environment.prod;
export const appConstants = {
  BASE_URL: "http://localhost:8082/server/",
};
const setAppEnvironment = () => {
  if (ENVIRONMENT === "development") {
    appConstants.BASE_URL = "http://localhost:8080/";
    return appConstants;
  }
  return appConstants;
};
export const appConfiguration = setAppEnvironment();
export const storageKeys = {
  AUTH: "EDUCARE_AUTH",
};
