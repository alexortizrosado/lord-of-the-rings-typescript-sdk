/***
 * Typescript SDK for The Lord of the Rings API
 *
 * @author   Alex Ortiz-Rosado <alexortizrosado@gmail.com>
 * @version  2022.00.01
 * @link     https://github.com/alexortizrosado/alexortizrosado-SDK
 */

import axios, { AxiosInstance } from "axios";

import { Book } from "./services/Book";

export type ApiHeaders = {
  Authorization?: string;
};

/**
 * Client object used to communicate with the Lord of the Rings API
 */
export class LotrApi {
  private accessToken: string | null = null;
  private serverUrl: string;
  private client: AxiosInstance;

  public readonly Books: Book;

  constructor(acessToken?: string) {
    this.accessToken = acessToken || null;
    this.serverUrl = "https://the-one-api.dev/v2";
    this.client = axios.create({
      baseURL: this.serverUrl,
      headers: this.getHeaders(),
    });

    this.Books = new Book(this.client);
  }

  private getHeaders(): ApiHeaders {
    const headers: ApiHeaders = {};
    if (this.accessToken) {
      headers["Authorization"] = `Bearer ${this.accessToken}`;
    }
    return headers;
  }
}
