import { AxiosInstance } from "axios";
import { ApiResponse } from "../types/ApiResponse";
import { Book as BookType } from "../types/Book";

export class Book {
  private readonly client: AxiosInstance;
  static readonly basePath = "/book";

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get(id: string): Promise<BookType> {
    const response = await this.client.get(`${Book.basePath}/${id}`);
    return response.data.docs[0];
  }

  async catalog(): Promise<ApiResponse<BookType[]>> {
    const response = await this.client.get(`${Book.basePath}`);
    return response.data;
  }
}
