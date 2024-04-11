import { getToken } from '@services/token.service';
import axios from 'axios';

export const API_URL = `${process.env.API_URL}/api/v1/`;

export const HttpService = () => {
  if (!getToken().accessToken) {
    return axios.create({
      withCredentials: true,
      baseURL: API_URL,
      headers: {
        accept: 'application/json',
      },
    });
  }
  return axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${getToken().accessToken}`,
      accept: 'application/json',
    },
  });
};

export default HttpService;
