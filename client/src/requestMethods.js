import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDZjMTZmNWIyZmQ4NzRlNmVjNDY2OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njk0MzAxOCwiZXhwIjoxNjc3MjAyMjE4fQ.YyjfNaaa8nQeEhBC2-UIpw6SjTIKf2Et79VtL0QMwM0"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});  
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token:`Bearer ${TOKEN}`},
});  
