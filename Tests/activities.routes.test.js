import request from "supertest";
import app from "../app.js";

// tests whether the GET route for getAllActivities returns an array of all activities.

describe("GET /activities", function () {
  // test 1 - checks success: true and payload: an array of objects
  test("gives us an object with success: true and payload: an array", async function () {
    const expectedBody = {
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          activity_id: expect.any(Number),
          organiser_id: expect.any(String),
          location_id: expect.any(Number),
          max_attendees: expect.any(Number),
          date_time: expect.any(String),
          description: expect.any(String),
          type: expect.any(String),
          user_id: expect.any(String),
          user_name: expect.any(String),
          email: expect.any(String),
          location_name: expect.any(String),
          lat_long: expect.any(String),
          is_accessible: expect.any(Boolean),
        }),
      ]),
    };
    const actual = await request(app).get("/activities");
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
  // test 2 - checks that the array contains the correct shape of the activity data with correct types
  //   test("gives us an object with success: true and payload: an array", async function () {
  //     const expectedPayload = [
  //       {
  //         activity_id: expect.any(Number),
  //         organiser_id: expect.any(String),
  //         location_id: expect.any(Number),
  //         max_attendees: expect.any(Number),
  //         date_time: expect.any(String),
  //         description: expect.any(String),
  //         type: expect.any(String),
  //         user_id: expect.any(String),
  //         user_name: expect.any(String),
  //         email: expect.any(String),
  //         location_name: expect.any(String),
  //         lat_long: expect.any(String),
  //         is_accessible: expect.any(Boolean),
  //       },
  //     ];
  //     const expectedBody = {
  //       success: true,
  //       payload: expectedPayload,
  //     };
  //     const actual = await request(app).get("/activities");
  //     expect(actual.body).toStrictEqual(expectedBody);
  //     expect(actual.statusCode).toBe(200);
  //   });
});

// describe('arrayContaining', () => {
//     const expected = ['Alice', 'Bob'];
//     it('matches even if received contains additional elements', () => {
//       expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
//     });
//     it('does not match if received does not contain expected elements', () => {
//       expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
//     });
//   });
