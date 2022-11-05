import { AxiosError, AxiosInstance } from "axios";
import { generateError } from "../Error";
import { ApiResponse } from "../types/ApiResponse";
import { Chapter as ChapterType } from "../types/Chapter";
import { Book } from "./Book";

export class Chapter {
  private readonly client: AxiosInstance;
  static readonly basePath = "/chapter";

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get(id: string): Promise<ChapterType> {
    const response = await this.client
      .get(`${Chapter.basePath}/${id}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data.docs[0];
  }

  async catalog(): Promise<ApiResponse<ChapterType[]>> {
    const response = await this.client
      .get(`${Chapter.basePath}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }

  async getChaptersByBook(bookId: string) {
    const response = await this.client
      .get(`${Book.basePath}/${bookId}/${Book.basePath}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }
}
