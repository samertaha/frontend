import axios from 'axios';

const gotchya = axios.create({
  baseURL: 'http://ec2-3-22-194-77.us-east-2.compute.amazonaws.com/api',
});

export default gotchya;
