import { useState, useEffect } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestOptions {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers?: Record<string, string>;
  data?: any;
  params?: any;
}


  export const useAxios = () => {
  const [axiosInstance, setAxiosInstance] = useState<AxiosInstance | null>(null);

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:8000/api', 
    });

    setAxiosInstance(instance);

    return () => {
      setAxiosInstance(null);
    };
  }, []);

  const makeRequest = async ({ url, method, headers, data, params }: RequestOptions): Promise<AxiosResponse<any>> => {
    if (!axiosInstance) {
      throw new Error('Axios instance not initialized');
    }

    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      data,
      params,
    };

    try {
      const response = await axiosInstance.request(config);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return { makeRequest };
};