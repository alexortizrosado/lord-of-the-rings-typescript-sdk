import { Chapter } from "../../src/services/Chapter";
import { AxiosInstance } from "axios";

describe("Chapter", () => {
  describe("catalog()", () => {
    test("should return catalog of chapters", async () => {
      const expected = {
        docs: [
          {
            _id: "6091b6d6d58360f988133b8b",
            chapterName: "A Long-expected Party",
            book: "5cf5805fb53e011a64671582",
          },
          {
            _id: "6091b6d6d58360f988133b8c",
            chapterName: "The Shadow of the Past",
            book: "5cf5805fb53e011a64671582",
          },
        ],
      };
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const chapterClient = new Chapter(mockClient);
      const response = await chapterClient.catalog();

      expect(response).toEqual(expected);
    });
  });

  describe("get()", () => {
    test("should return the corresponding chapter object", async () => {
      const expected = {
        docs: [
          {
            _id: "6091b6d6d58360f988133b8b",
            chapterName: "A Long-expected Party",
            book: "5cf5805fb53e011a64671582",
          },
        ],
      };
      const chapterId = expected.docs[0]._id;
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const chapterClient = new Chapter(mockClient);
      const chapter = await chapterClient.get(chapterId);

      const expectedChapter = expected.docs[0];
      expect(chapter).toEqual(expectedChapter);
    });
  });

  describe("getChaptersByBook()", () => {
    test("should return catalog of chapters", async () => {
      const expected = {
        docs: [
          {
            _id: "6091b6d6d58360f988133b8b",
            chapterName: "A Long-expected Party",
            book: "book_1",
          },
        ],
      };

      const expectedBookId = "book_1";
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const chapterClient = new Chapter(mockClient);
      const response = await chapterClient.getChaptersByBook(expectedBookId);

      expect(response).toEqual(expected);
    });
  });
});
