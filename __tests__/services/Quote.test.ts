import { Quote } from "../../src/services/Quote";
import { AxiosInstance } from "axios";

describe("Quote", () => {
  describe("catalog()", () => {
    test("should return catalog of quotes", async () => {
      const expected = {
        docs: [
          {
            _id: "5cd96e05de30eff6ebcce7e9",
            dialog: "Deagol!",
            movie: "5cd95395de30eff6ebccde5d",
            character: "5cd99d4bde30eff6ebccfe9e",
            id: "5cd96e05de30eff6ebcce7e9",
          },
          {
            _id: "5cd96e05de30eff6ebcce7ea",
            dialog: "Deagol!",
            movie: "5cd95395de30eff6ebccde5d",
            character: "5cd99d4bde30eff6ebccfe9e",
            id: "5cd96e05de30eff6ebcce7ea",
          },
          {
            _id: "5cd96e05de30eff6ebcce7eb",
            dialog: "Deagol!",
            movie: "5cd95395de30eff6ebccde5d",
            character: "5cd99d4bde30eff6ebccfe9e",
            id: "5cd96e05de30eff6ebcce7eb",
          },
        ],
      };
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const quoteClient = new Quote(mockClient);
      const response = await quoteClient.catalog();

      expect(response).toEqual(expected);
    });
  });

  describe("get()", () => {
    test("should return the corresponding quote object", async () => {
      const expected = {
        docs: [
          {
            _id: "5cd96e05de30eff6ebcce7e9",
            dialog: "Deagol!",
            movie: "5cd95395de30eff6ebccde5d",
            character: "5cd99d4bde30eff6ebccfe9e",
            id: "5cd96e05de30eff6ebcce7e9",
          },
        ],
      };
      const quoteId = expected.docs[0]._id;
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const quoteClient = new Quote(mockClient);
      const quote = await quoteClient.get(quoteId);

      const expectedQuote = expected.docs[0];
      expect(quote).toEqual(expectedQuote);
    });
  });
});
