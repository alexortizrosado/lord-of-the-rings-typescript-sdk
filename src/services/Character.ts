import { AxiosError, AxiosInstance } from "axios";
import { generateError } from "../Error";
import { ApiResponse } from "../types/ApiResponse";
import { Character as CharacterType } from "../types/Character";

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
    return response?.data.docs[0];
  }

  async catalog(): Promise<ApiResponse<CharacterType[]>> {
    const response = await this.client
      .get(`${Character.basePath}`)
      .catch((error: AxiosError) => {
        generateError(error);
      });
    return response?.data;
  }
}
