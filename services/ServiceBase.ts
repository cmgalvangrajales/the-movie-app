import axios, { AxiosRequestConfig } from "axios";

interface ServiceBaseInterface {
  servicePath: string;
  params?: {};
  data?: {};
  headers?: {};
}

const callService = <T>(call: AxiosRequestConfig): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    axios(call)
      .then((response) => resolve(response.data as T))
      .catch((error) => {
        const response = error.response?.error || error;
        reject({ ...response });
      });
  });
};

/**
 * Execute get request
 *
 * @param { ServiceBaseInterface } serviceProps - Service data to send
 *
 * @returns { Promise<T> } Request response
 */
export const get = <T>({
  servicePath,
  params,
  headers,
}: ServiceBaseInterface): Promise<T> =>
  callService({
    method: "GET",
    params,
    headers,
    url: servicePath,
  });
