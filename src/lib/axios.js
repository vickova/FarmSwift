import axios from "axios";
import { BASE_URL } from "../utils/config";

const axiosInstance = axios.create({
    baseURL: BASE_URL, // Replace with your actual API base URL
    withCredentials: true, // Ensures cookies are sent with requests
    headers: {
      "Content-Type": "application/json",
    },
  });

  export default axiosInstance