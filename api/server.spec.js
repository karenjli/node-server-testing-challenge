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

  it("should return api:up", async () => {
    const response = await request(server).get("/");
    expect(response.body).toEqual({ api: "up" });
  });
});
