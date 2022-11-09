import axios from 'axios';

const gotchya = axios.create({
  //baseURL: 'http://localhost:5000/api',
  baseURL: 'https://ec2-3-28-55-94.me-central-1.compute.amazonaws.com/api',
});

export default gotchya;
