import axios from "axios";

const AxiosApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_BACKEND}`,
});

export default AxiosApi;
