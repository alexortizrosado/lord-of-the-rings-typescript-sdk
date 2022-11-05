/***
 * Typescript SDK for The Lord of the Rings API
 *
 * @author   Alex Ortiz-Rosado <alexortizrosado@gmail.com>
 * @version  2022.00.01
 * @link     https://github.com/alexortizrosado/alexortizrosado-SDK
 */

import axios, { AxiosInstance } from "axios";

import { Book } from "./services/Book";
import { Movie } from "./services/Movie";

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

  public readonly Book: Book;
  public readonly Movie: Movie;

  constructor(acessToken?: string) {
    this.accessToken = acessToken || null;
    this.serverUrl = "https://the-one-api.dev/v2";
    this.client = axios.create({
      baseURL: this.serverUrl,
      headers: this.getHeaders(),
    });

    this.Book = new Book(this.client);
    this.Movie = new Movie(this.client);
  }

  private getHeaders(): ApiHeaders {
    const headers: ApiHeaders = {};
    if (this.accessToken) {
      headers["Authorization"] = `Bearer ${this.accessToken}`;
    }
    return headers;
  }
}
