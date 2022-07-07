import axios from 'axios';

const gotchya = axios.create({
  //baseURL: 'http://localhost:8000/api',
  baseURL: 'http://ec2-3-134-252-141.us-east-2.compute.amazonaws.com/api',
});

export default gotchya;
