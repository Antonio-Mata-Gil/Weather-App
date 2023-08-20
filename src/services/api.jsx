import axios from "axios";

export const ApiHeader = {
  
  
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: {
      toString() {
        return `Bearer ${localStorage.getItem("token")} `;
      },
    },
  };
export const API = axios.create({
    baseURL: "http://localhost:3000",
    headers: ApiHeader,
})
