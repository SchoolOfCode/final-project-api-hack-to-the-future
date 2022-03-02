import request from "supertest";
import app from "../app.js";
import { server } from "../bin/www.js";

afterAll((done) => {
  server.close();
  done();
});

describe("PUT /participants", function () {
  test("upserts a participants relationship between user and activity and returns the data", async function () {
    const user_id = "2";
    const activity_id = 1;
    const participant_role = "interested";
    const expectedBody = {
      success: true,
      payload: [
        {
          participant_id: expect.any(Number),
          user_id: user_id,
          activity_id: activity_id,
          participant_role: participant_role,
        },
      ],
    };
    const actual = await request(app)
      .put("/participants")
      .set("Authorization", user_id)
      .send({
        activity_id: activity_id,
        participant_role: participant_role,
      });
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});
