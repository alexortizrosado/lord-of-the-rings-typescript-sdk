import { ApiResponse } from "../types/ApiResponse";
import { AxiosError, AxiosInstance } from "axios";
import { Movie as MovieType } from "../types/Movie";
import { encodeRequestOptions, RequestOptions } from "../types/RequestOptions";
import { generateError } from "../Error";

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

  async catalog(
    options?: RequestOptions<MovieType>
  ): Promise<ApiResponse<MovieType[]>> {
    const response = await this.client
      .get(`${Movie.basePath}${encodeRequestOptions<MovieType>(options)}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }
}
