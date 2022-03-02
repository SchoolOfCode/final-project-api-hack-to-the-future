import request from "supertest";
import app from "../app.js";
import { server } from "../bin/www.js";

afterAll((done) => {
  server.close();
  done();
});

// tests whether the GET route for getAllActivities returns an array of all activities.

describe("GET /activities", function () {
  // test 1
  test("gives us an object with success: true and payload: an array", async function () {
    const expectedBody = {
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          activity_id: expect.any(Number),
          organiser_id: expect.any(String),
          max_attendees: expect.any(Number),
          date_time: expect.any(String),
          description: expect.any(String),
          type: expect.any(String),
          user_id: expect.any(String),
          user_name: expect.any(String),
          email: expect.any(String),
          location_name: expect.any(String),
        }),
      ]),
    };
    const actual = await request(app)
      .get("/activities")
      .set("Authorization", "test_user_id");
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });

  // test 2
  test("gives us an object with success: true and payload: an array for participant 2", async function () {
    const expectedBody = {
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          activity_id: expect.any(Number),
          organiser_id: expect.any(String),
          max_attendees: expect.any(Number),
          date_time: expect.any(String),
          description: expect.any(String),
          type: expect.any(String),
          user_id: expect.any(String),
          user_name: expect.any(String),
          email: expect.any(String),
          location_name: expect.any(String),
        }),
      ]),
    };
    const actual = await request(app)
      .get("/activities")
      .set("Authorization", "2");
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });

  // test 3
  test("gives us back the activities that match the selected filters", async function () {
    const expectedBody = {
      success: true,
      payload: [
        {
          activity_id: 1,
          date_time: "2022-03-02T12:26:07.278Z",
          description:
            "All abilities welcome to a walk round Cannon Hill Park followed by coffee at the park cafe",
          email: "paddington@bear.com",
          location_name: "Cannon Hill Park, Birmingham",
          max_attendees: 8,
          organiser_id: "1",
          type: "walk",
          user_id: "1",
          user_name: "Paddington Bear",
        },
      ],
    };
    const actual = await request(app)
      .get("/activities?type=walk")
      .set("Authorization", "test_user_id");
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});

// tests for POST route

describe("POST /activities", function () {
  test("it creates a new activity in the database and returns its data", async function () {
    const expectedBody = {
      success: true,
      payload: [
        {
          activity_id: expect.any(Number),
          date_time: "2022-02-27T09:38:38.393Z",
          description: "Let's get Korean food for lunch.",
          location_name: "Manchester",
          max_attendees: 4,
          organiser_id: "1",
          type: "restaurant",
        },
      ],
    };
    const actual = await request(app)
      .post("/activities")
      .set("Authorization", "1")
      .send({
        location_name: "Manchester",
        max_attendees: 4,
        date_time: "2022-02-27T09:38:38.393Z",
        description: "Let's get Korean food for lunch.",
        type: "restaurant",
      });
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});
