export type HttpRequestContract = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  responseType?: ResponseTypeRequest;
};

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

export type ResponseTypeRequest = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

export interface RequestApi {
  data?: any;
  headers?: any;
}
