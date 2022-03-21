import axios, { AxiosError, AxiosInstance } from 'axios';

import handleReqErrors from '../util/handle-req-errors';

const BASE_URL = 'https://9.react.pages.academy/six-cities';
const DEFAULT_TIMEOUT = 5000;

function createAxios(): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
  });

  axiosInstance.interceptors.response.use(function (config) {
    return Promise.resolve(config);
  }, function (error: AxiosError) {
    const errorCode = error.response?.status;
    // @ts-ignore
    return Promise.reject(handleReqErrors(errorCode));
  })

  return axiosInstance;
}

export default createAxios();
