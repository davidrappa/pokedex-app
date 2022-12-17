import axios from "axios";

const api_config = {
  baseURL: "https://pokeapi.co/api/v2",
};

export const api = axios.create(api_config);
