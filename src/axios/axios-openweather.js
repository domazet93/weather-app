import axios from "axios";

const instance = axios.create({
  baseURL: "https://openweathermap.org/data/2.5"
});

export default instance;
