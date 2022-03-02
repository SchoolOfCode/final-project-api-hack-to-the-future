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
