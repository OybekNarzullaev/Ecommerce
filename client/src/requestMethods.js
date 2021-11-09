import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzk4OTNiMmJiN2IwZjFlN2NjNzM0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjM0NjEyMCwiZXhwIjoxNjM2NjA1MzIwfQ.nBDZ46h02EffuWteugglS9UDKr74i0z2en-TOavHPaw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
