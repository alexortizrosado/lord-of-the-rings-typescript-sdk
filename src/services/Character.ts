import { ApiResponse } from "../types/ApiResponse";
import { AxiosError, AxiosInstance } from "axios";
import { Character as CharacterType } from "../types/Character";
import { generateError } from "../Error";
import { encodeRequestOptions, RequestOptions } from "../types/RequestOptions";

export class Character {
  private readonly client: AxiosInstance;
  static readonly basePath = "/character";

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get(id: string): Promise<CharacterType> {
    const response = await this.client
      .get(`${Character.basePath}/${id}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    if (response) return response?.data.docs[0];
  }

  async catalog(
    options?: RequestOptions<CharacterType>
  ): Promise<ApiResponse<CharacterType[]>> {
    const response = await this.client
      .get(
        `${Character.basePath}${encodeRequestOptions<CharacterType>(options)}`
      )
      .catch((error: AxiosError) => {
        generateError(error);
      });
    if (response) return response?.data;
  }
}
