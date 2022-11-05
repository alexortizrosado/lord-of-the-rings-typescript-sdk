import { Book } from "../../src/services/Book";
import { AxiosInstance } from "axios";

describe("Book", () => {
  describe("catalog()", () => {
    test("should return catalog of books", async () => {
      const expected = {
        docs: [
          {
            _id: "5cd95395de30eff6ebccfea8",
            name: "The Fellowship of the Ring",
          },
          {
            _id: "5cd95395de30eff6ebccfea9",
            name: "The Two Towers",
          },
          {
            _id: "5cd95395de30eff6ebccfeaa",
            name: "The Return of the King",
          },
        ],
      };
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const bookClient = new Book(mockClient);
      const response = await bookClient.catalog();

      expect(response).toEqual(expected);
    });
  });

  describe("get()", () => {
    test("should return the corresponding book object", async () => {
      const expected = {
        docs: [
          {
            _id: "5cd95395de30eff6ebccfea8",
            name: "The Fellowship of the Ring",
          },
        ],
      };
      const bookId = expected.docs[0]._id;
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const bookClient = new Book(mockClient);
      const book = await bookClient.get(bookId);

      const expectedBook = expected.docs[0];
      expect(book).toEqual(expectedBook);
    });
  });
});
