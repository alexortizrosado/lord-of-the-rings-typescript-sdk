import { Movie } from "../../src/services/Movie";
import { AxiosInstance } from "axios";

describe("Movie", () => {
  describe("catalog()", () => {
    test("should return catalog of movies", async () => {
      const expected = {
        docs: [
          {
            _id: "5cd95395de30eff6ebccde56",
            name: "The Lord of the Rings Series",
            runtimeInMinutes: 558,
            budgetInMillions: 281,
            boxOfficeRevenueInMillions: 2917,
            academyAwardNominations: 30,
            academyAwardWins: 17,
            rottenTomatoesScore: 94,
          },
          {
            _id: "5cd95395de30eff6ebccde57",
            name: "The Hobbit Series",
            runtimeInMinutes: 462,
            budgetInMillions: 675,
            boxOfficeRevenueInMillions: 2932,
            academyAwardNominations: 7,
            academyAwardWins: 1,
            rottenTomatoesScore: 66.33333333,
          },
        ],
      };
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const movieClient = new Movie(mockClient);
      const response = await movieClient.catalog();

      expect(response).toEqual(expected);
    });
  });

  describe("get()", () => {
    test("should return the corresponding movie object", async () => {
      const expected = {
        docs: [
          {
            _id: "5cd95395de30eff6ebccde56",
            name: "The Lord of the Rings Series",
            runtimeInMinutes: 558,
            budgetInMillions: 281,
            boxOfficeRevenueInMillions: 2917,
            academyAwardNominations: 30,
            academyAwardWins: 17,
            rottenTomatoesScore: 94,
          },
        ],
      };
      const movieId = expected.docs[0]._id;
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const movieClient = new Movie(mockClient);
      const movie = await movieClient.get(movieId);

      const expectedMovie = expected.docs[0];
      expect(movie).toEqual(expectedMovie);
    });
  });
});
