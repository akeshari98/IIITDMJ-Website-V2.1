// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Using env variable if available
});

export default axiosInstance;
// process.env.REACT_APP_API_URL || 