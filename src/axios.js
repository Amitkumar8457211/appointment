import axios from "axios";

let baseURL;

if (typeof window !== "undefined") {
  baseURL = "http://localhost:8000";
}

export var axiosApi = axios.create({
  baseURL,
});
