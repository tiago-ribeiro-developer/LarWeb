import AxiosApi from "../../api/AxiosApi";

import { HttpRequestContract } from "../../../domain/contract/HttpContract";

type ApiResponse = {
  statusCode: any;
  headers: any;
  body: any;
};

/**
 * CrudCall
 * @param request
 * @constructor
 */
export async function CrudCall(request: HttpRequestContract) {
  let axiosResponse: ApiResponse = {
    statusCode: null,
    headers: null,
    body: null,
  };

  console.info("REQUEST ", request);

  await AxiosApi.request({
    url: request.url,
    method: request.method,
    data: request.body,
    headers: request.headers,
  })
    .then((response) => {
      axiosResponse = {
        statusCode: response.status,
        headers: response.headers,
        body: response.data,
      };
      console.info("RESPONSE ", axiosResponse);
    })
    .catch((error) => {
      axiosResponse = {
        statusCode: error.response.status,
        headers: error.response.headers,
        body: error.response.data,
      };
      console.error("RESPONSE ERROR ", axiosResponse);
    });

  return axiosResponse;
}
