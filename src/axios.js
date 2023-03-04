import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      console.log("ERROR");
      // router.push("/login");
      console.log("ERROR AUTH");
      console.log(localStorage.getItem("auth"));
      window.location.href = "/login";
      return Promise.reject(error);
    }
    console.log("ERROR");

    return Promise.reject(error);
  }
);

export default axiosInstance;
