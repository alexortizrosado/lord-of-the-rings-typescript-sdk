import { AxiosError, AxiosInstance } from "axios";
import { generateError } from "../Error";
import { ApiResponse } from "../types/ApiResponse";
import { Quote as QuoteType } from "../types/Quote";

export class Quote {
  private readonly client: AxiosInstance;
  static readonly basePath = "/quote";

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get(id: string): Promise<QuoteType> {
    const response = await this.client
      .get(`${Quote.basePath}/${id}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data.docs[0];
  }

  async catalog(): Promise<ApiResponse<QuoteType[]>> {
    const response = await this.client
      .get(`${Quote.basePath}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }
}
