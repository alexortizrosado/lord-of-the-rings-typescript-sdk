import { AxiosError, AxiosInstance } from "axios";
import { generateError } from "../Error";
import { ApiResponse } from "../types/ApiResponse";
import { Movie as MovieType } from "../types/Movie";

export class Movie {
  private readonly client: AxiosInstance;
  static readonly basePath = "/movie";

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get(id: string): Promise<MovieType> {
    const response = await this.client
      .get(`${Movie.basePath}/${id}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data.docs[0];
  }

  async catalog(): Promise<ApiResponse<MovieType[]>> {
    const response = await this.client
      .get(`${Movie.basePath}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }
}
