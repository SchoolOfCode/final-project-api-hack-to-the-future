import db from "../../connection.js";

const data = [
  {
    user_id: "1",
    user_name: "Paddington Bear",
    email: "paddington@bear.com",
  },
  {
    user_id: "2",
    user_name: "Winnie the Pooh",
    email: "Winnie@bear.com",
  },
  {
    user_id: "3",
    user_name: "Baloo",
    email: "Baloo@bear.com",
  },
  {
    user_id: "4",
    user_name: "Ruben",
    email: "Ruben@bear.com",
  },
];
async function populateUsersTable() {
  for (let i = 0; i < data.length; i++) {
    const response = await db.query(
      `INSERT INTO users (user_id, user_name, email) VALUES ($1, $2, $3);`,
      [data[i].user_id, data[i].user_name, data[i].email]
    );

    console.log(response);
  }
}

await populateUsersTable();

db.end();
