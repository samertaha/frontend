import axios from "axios";

const gotchya = axios.create({
  baseURL: "http://3.145.5.121/api",
});

export default gotchya;
