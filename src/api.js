import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3200/', 
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 && window.location.href !== "/signIn") {
      alert("Please log in to continue!");
      window.location.href = "/signIn"
    }
    if (error.response.status === 500) {
      alert("Server error, please try again.")
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
