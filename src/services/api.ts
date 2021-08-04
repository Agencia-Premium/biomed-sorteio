import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-sorteio-biomed.herokuapp.com",
});

export default instance;
