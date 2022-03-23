import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://9.react.pages.academy/six-cities';
const DEFAULT_TIMEOUT = 5000;

function createAxios(): AxiosInstance {
  return axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
  });
}

export default createAxios();
