import { appConfiguration } from "../configs/appConfiguration";
import { api } from "../configs/axiosConfiguration";
type loginProps = {
  data: object;
};
export const login = async (values: loginProps) => {
  try {
    const response = await api.post(
      appConfiguration.BASE_URL + "login",
      values?.data
    );
    console.log(JSON.stringify(response));
  } catch (error) {
    console.log("Error @ services > authService > login ", error);
  }
};
