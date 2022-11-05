/***
 * Typescript SDK for The Lord of the Rings API
 *
 * @author   Alex Ortiz-Rosado <alexortizrosado@gmail.com>
 * @version  2022.00.08
 * @link     https://github.com/alexortizrosado/alexortizrosado-SDK
 */

import axios, { AxiosInstance } from "axios";

import { Book } from "./services/Book";
import { Chapter } from "./services/Chapter";
import { Character } from "./services/Character";
import { Movie } from "./services/Movie";
import { Quote } from "./services/Quote";

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
  public readonly Chapter: Chapter;
  public readonly Character: Character;
  public readonly Quote: Quote;

  constructor(acessToken?: string) {
    this.accessToken = acessToken || null;
    this.serverUrl = "https://the-one-api.dev/v2";
    this.client = axios.create({
      baseURL: this.serverUrl,
      headers: this.getHeaders(),
    });

    this.Book = new Book(this.client);
    this.Movie = new Movie(this.client);
    this.Chapter = new Chapter(this.client);
    this.Character = new Character(this.client);
    this.Quote = new Quote(this.client);
  }

  private getHeaders(): ApiHeaders {
    const headers: ApiHeaders = {};
    if (this.accessToken) {
      headers["Authorization"] = `Bearer ${this.accessToken}`;
    }
    return headers;
  }
}
