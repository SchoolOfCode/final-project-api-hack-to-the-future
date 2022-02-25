import db from "../../connection.js";

const data = [
  {
    organiser_id: "1",
    location_name: "Cannon Hill Park, Birmingham",
    max_attendees: 8,
    date_time: new Date(Date.now()).toISOString(),
    description:
      "All abilities welcome to a walk round Cannon Hill Park followed by coffee at the park cafe",
    type: "walk",
  },
  {
    organiser_id: "1",
    location_name: "Odeon Theatre, Birmingham",
    max_attendees: 3,
    date_time: new Date(Date.now()).toISOString(),
    description: "Going to see the new Marvel movie in the cinema.",
    type: "film",
  },
  {
    organiser_id: "1",
    location_name: "London",
    max_attendees: 5,
    date_time: new Date(Date.now()).toISOString(),
    description: "I want to get bubble tea from the new cute bubble tea cafe!",
    type: "cafe",
  },
  {
    organiser_id: "1",
    location_name: "Leeds",
    max_attendees: 4,
    date_time: new Date(Date.now()).toISOString(),
    description: "Let's go to karaoke!",
    type: "karaoke",
  },
];

async function populateActivitiesTable() {
  for (let i = 0; i < data.length; i++) {
    const response = await db.query(
      `INSERT INTO activities (organiser_id, location_name, max_attendees, date_time, description, type) VALUES ($1, $2, $3, $4, $5, $6);`,
      [
        data[i].organiser_id,
        data[i].location_name,
        data[i].max_attendees,
        new Date(Date.now()).toISOString(),
        data[i].description,
        data[i].type,
      ]
    );

    console.log(response);
  }
}

populateActivitiesTable();
