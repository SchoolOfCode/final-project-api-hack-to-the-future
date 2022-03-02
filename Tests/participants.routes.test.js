import request from "supertest";
import app from "../app.js";
import { server } from "../bin/www.js";

afterAll((done) => {
  server.close();
  done();
});

describe("PUT /participants", function () {
  test("upserts a participants relationship to interested between user and activity and returns the data", async function () {
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

  test("upserts a participants relationship to attending between user and activity and returns the data", async function () {
    const user_id = "2";
    const activity_id = 1;
    const participant_role = "attending";
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

describe("GET /participants", function () {
  test("gets all activities based on a user's role", async function () {
    const user_id = "2";
    const activity_id = 1;
    const participant_role = "attending";
    const expectedBody = {
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          participant_id: expect.any(Number),
          user_id: user_id,
          activity_id: activity_id,
          participant_role: participant_role,
          organiser_id: expect.any(String),
          location_name: expect.any(String),
          max_attendees: expect.any(Number),
          date_time: expect.any(String),
          description: expect.any(String),
          type: expect.any(String),
        }),
      ]),
    };
    const actual = await request(app)
      .get(`/participants/${participant_role}`)
      .set("Authorization", user_id);
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});
