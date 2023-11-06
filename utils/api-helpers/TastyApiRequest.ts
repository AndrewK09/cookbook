import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { RequestMethod } from "utils/constants/requests";

export class TastyApiRequest {
  get = <T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    this.request({ method: RequestMethod.GET, ...options });

  patch = (options: AxiosRequestConfig): Promise<AxiosResponse> =>
    this.request({ method: RequestMethod.PATCH, ...options });

  post = (options: AxiosRequestConfig): Promise<AxiosResponse> =>
    this.request({ method: RequestMethod.POST, ...options });

  put = (options: AxiosRequestConfig): Promise<AxiosResponse> =>
    this.request({ method: RequestMethod.PUT, ...options });

  delete = (options: AxiosRequestConfig): Promise<AxiosResponse> =>
    this.request({ method: RequestMethod.DELETE, ...options });

  // Generic
  request = (options?: AxiosRequestConfig): Promise<AxiosResponse> => {

    const axiosRequestConfig: AxiosRequestConfig = {
      ...options,
      params: {
        from: '0',
        size: '20',
      },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST
      },
      url: `https://tasty.p.rapidapi.com/${options.url}`,
    };

    return axios(axiosRequestConfig);
  };

  getRecipesList = (options?: AxiosRequestConfig) => {
    return this.request({...options, url: 'recipes/list'})
  }


}