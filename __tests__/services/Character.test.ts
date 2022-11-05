import { Character } from "../../src/services/Character";
import { AxiosInstance } from "axios";

describe("Character", () => {
  describe("catalog()", () => {
    test("should return catalog of characters", async () => {
      const expected = {
        docs: [
          {
            _id: "5cd99d4bde30eff6ebccfbbe",
            height: "",
            race: "Human",
            gender: "Female",
            birth: "",
            spouse: "Belemir",
            death: "",
            realm: "",
            hair: "",
            name: "Adanel",
            wikiUrl: "http://lotr.wikia.com//wiki/Adanel",
          },
          {
            _id: "5cd99d4bde30eff6ebccfbbf",
            height: "",
            race: "Human",
            gender: "Male",
            birth: "Before ,TA 1944",
            spouse: "",
            death: "Late ,Third Age",
            realm: "",
            hair: "",
            name: "Adrahil I",
            wikiUrl: "http://lotr.wikia.com//wiki/Adrahil_I",
          },
        ],
      };
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const characterClient = new Character(mockClient);
      const response = await characterClient.catalog();

      expect(response).toEqual(expected);
    });
  });

  describe("get()", () => {
    test("should return the corresponding character object", async () => {
      const expected = {
        docs: [
          {
            _id: "5cd99d4bde30eff6ebccfbbe",
            height: "",
            race: "Human",
            gender: "Female",
            birth: "",
            spouse: "Belemir",
            death: "",
            realm: "",
            hair: "",
            name: "Adanel",
            wikiUrl: "http://lotr.wikia.com//wiki/Adanel",
          },
        ],
      };
      const characterId = expected.docs[0]._id;
      const mockClient = {
        get: jest.fn(() => Promise.resolve({ data: expected })),
      } as unknown as AxiosInstance;

      const characterClient = new Character(mockClient);
      const character = await characterClient.get(characterId);

      const expectedCharacter = expected.docs[0];
      expect(character).toEqual(expectedCharacter);
    });
  });
});
