import axios from "axios";
const url = "http://localhost:8000/api";
let token = "uXDVSXrmaZeLwmAPB6inji4I0UlhuQbWjJyPgU7D";
export const link = axios.create({
  baseURL: url,
  headers: {
    api_token: token,
  },
});
