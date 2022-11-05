import { ApiResponse } from "../types/ApiResponse";
import { AxiosError, AxiosInstance } from "axios";
import { Character } from "./Character";
import { Movie } from "./Movie";
import { Quote as QuoteType } from "../types/Quote";
import { generateError } from "../Error";
import { encodeRequestOptions, RequestOptions } from "../types/RequestOptions";

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

  async catalog(
    options?: RequestOptions<QuoteType>
  ): Promise<ApiResponse<QuoteType[]>> {
    const response = await this.client
      .get(`${Quote.basePath}${encodeRequestOptions(options)}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }

  async getQuotesByCharacter(
    characterId: string,
    options?: RequestOptions<QuoteType>
  ) {
    const response = await this.client
      .get(
        `${Character.basePath}/${characterId}/${
          Quote.basePath
        }${encodeRequestOptions(options)}`
      )
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }

  async getQuotesByMovie(movieId: string, options?: RequestOptions<QuoteType>) {
    const response = await this.client
      .get(
        `${Movie.basePath}/${movieId}/${Quote.basePath}${encodeRequestOptions(
          options
        )}`
      )
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }
}
