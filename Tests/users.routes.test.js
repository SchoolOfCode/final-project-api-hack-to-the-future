import request from "supertest";
import app from "../app.js";
import { server } from "../bin/www.js";

afterAll((done) => {
  server.close();
  done();
});

// check that the GET users fetches all users
describe("GET /users", function () {
  test("gives us gives us an object with success: true and payload: an array", async function () {
    const expectedBody = {
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          user_id: expect.any(String),
          user_name: expect.any(String),
          email: expect.any(String),
        }),
      ]),
    };
    const actual = await request(app)
      .get("/users")
      .set("Authorization", "test_user_id");
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});

describe("PUT /users", function () {
  test("when a current user is sent, only their data is returned", async function () {
    const expectedBody = {
      success: true,
      payload: [
        {
          email: "paddington@bear.com",
          user_id: "1",
          user_name: "Paddington Bear",
        },
      ],
    };
    const actual = await request(app)
      .put("/users")
      .set("Authorization", "1")
      .send({
        email: "paddington@bear.com",
        user_name: "Paddington Bear",
      });
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});
