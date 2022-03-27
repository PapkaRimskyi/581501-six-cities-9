import axios from './create-axios';

type RequestUrl = string;

export async function getDataRequest<R>(url: RequestUrl) {
  return await axios.get<R>(url);
}

export async function sendDataRequest<R, D>(url: RequestUrl, data: D) {
  return await axios.post<R>(url, data);
}

