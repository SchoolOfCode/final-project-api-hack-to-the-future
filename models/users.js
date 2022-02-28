import db from "../db/connection.js";

export async function getAllUsers() {
  const result = await db.query(`SELECT * FROM users;`);
  return result.rows;
}

export async function createUser(userId) {
  const result = await db.query(``);
  return result.rows;
}
