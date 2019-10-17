const Country = require("./countryModel");
const db = require("../data/dbConfig");

describe("country model", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
