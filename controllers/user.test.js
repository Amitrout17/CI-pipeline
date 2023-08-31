const request = require("supertest");
const app = require("../app");

describe("TEST FOR APIS", () => {
  beforeAll(async () => {
    // await //databse function to connect to the databses
  });
  afterAll(async () => {
    //await disconnect(disconnect function for disconnecting to the databases)
  });
  describe("Test Post /api/user", () => {
    test("Testing for post request APIs should responde with 201 created", async () => {
      const response = await request(app)
        .post("/api/v1/user/post")
        .send({
          name: "amit",
          age: "21",
        })
        .expect(200)
        .expect("Content-Type", /json/);

      expect(response.body).toMatchObject({
        message: "uesr created",
      });
    });
  });
});
