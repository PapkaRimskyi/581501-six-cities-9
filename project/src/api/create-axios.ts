import axios, { AxiosError, AxiosInstance } from 'axios';

import { getUserToken } from '../util/user-token';

import { BASE_URL, DEFAULT_TIMEOUT } from '../const/request-const';

function createAxios(): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
  });

  axiosInstance.interceptors.request.use((config) => {
    const token = getUserToken();
    if (token) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  axiosInstance.interceptors.response
    .use(
      (config) => Promise.resolve(config),
      (error: AxiosError) => {
        const status = error.response?.status;
        const method = error.response?.config.method;
        const rejectInformation = { status, method };
        return Promise.reject(rejectInformation);
      });

  return axiosInstance;
}

export default createAxios();
