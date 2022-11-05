import { ApiResponse } from "../types/ApiResponse";
import { AxiosError, AxiosInstance } from "axios";
import { Book as BookType } from "../types/Book";
import { generateError } from "../Error";
import { encodeRequestOptions, RequestOptions } from "../types/RequestOptions";

export class Book {
  private readonly client: AxiosInstance;
  static readonly basePath = "/book";

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get(id: string): Promise<BookType> {
    const response = await this.client
      .get(`${Book.basePath}/${id}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    if (response) return response?.data.docs[0];
  }

  async catalog(
    options?: RequestOptions<BookType>
  ): Promise<ApiResponse<BookType[]>> {
    const response = await this.client
      .get(`${Book.basePath}${encodeRequestOptions<BookType>(options)}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    if (response) return response?.data;
  }
}
