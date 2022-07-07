import axios from 'axios';

const gotchya = axios.create({
  baseURL: 'ec2-3-141-1-43.us-east-2.compute.amazonaws.com/api',
});

export default gotchya;
