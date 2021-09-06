import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://min-netflix.herokuapp.com/api/"
}) 