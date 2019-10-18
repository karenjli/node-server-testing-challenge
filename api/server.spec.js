const server = require("./server");
const request = require("supertest");

describe("GET /", () => {
  it("should return 200 http status code", () => {
    return request(server)
      .get("/")
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  it("should return json", () => {
    return request(server)
      .get("/country")
      .then(response => {
        expect(response.type).toMatch(/json/i);
      });
  });
  it("should return api:up", async () => {
    const response = await request(server).get("/");
    expect(response.body).toEqual({ api: "up" });
  });
});

// describe("able to add country", () => {
//   it("should return a country if added", () => {
//     const place = request(server)
//       .post("/country")
//       .send({ country: "France" });
//     expect(place.body).toEqual({ country: "France" });
//   });
// });
