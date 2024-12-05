import { CrudCall } from "../../infra/call/crud/CrudCall";
import { RequestApi } from "../../domain/contract/HttpContract";

export class PhoneUseCase {
  constructor(private readonly endPoint: string) {
    this.endPoint = endPoint;
  }

  async Get(request?: RequestApi) {
    return await CrudCall({
      url: this.endPoint,
      method: "GET",
      body: request?.data,
      headers: request?.headers,
    }).then((response) => response);
  }

  async Post(request?: RequestApi) {
    return await CrudCall({
      url: this.endPoint,
      method: "POST",
      body: request?.data,
      headers: request?.headers,
    }).then((response) => response);
  }

  async Put(request?: RequestApi) {
    return await CrudCall({
      url: this.endPoint,
      method: "PUT",
      body: request?.data,
      headers: request?.headers,
    }).then((response) => response);
  }

  async Delete(request?: RequestApi) {
    return await CrudCall({
      url: this.endPoint,
      method: "DELETE",
      body: request?.data,
      headers: request?.headers,
    }).then((response) => response);
  }
}
