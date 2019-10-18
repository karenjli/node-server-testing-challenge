const Country = require("./countryModel");
const db = require("../data/dbConfig");
const server = require("../api/server");

describe("country model", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("add()", () => {
  it("should add country to database", async () => {
    const record = await db("country");
    expect(record).toHaveLength(0);
    await Country.add({ country: "Argentina" });
    const list = await db("country");
    expect(list).toHaveLength(1);
  });
});

describe("delete()", () => {
  it("should delete the country from the database", async () => {
    const record = await db("country");
    expect(record).toHaveLength(1);
    await Country.remove(9);
    const updatelist = await db("country");
    expect(updatelist).toHaveLength(0);
  });
});
