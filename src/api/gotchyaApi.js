import axios from 'axios';

const gotchya = axios.create({
  // baseURL: 'http://localhost:8000/api',
  baseURL: 'http://ec2-3-141-1-43.us-east-2.compute.amazonaws.com/api',
});

export default gotchya;
