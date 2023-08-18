import axios from "axios";
import Router from "next/router";
// console.log("urlis", Router.basePath);

let baseURL;

if (typeof window !== "undefined") {
  baseURL = "http://localhost:8000";
}

export var axiosApi = axios.create({
  baseURL,
});
