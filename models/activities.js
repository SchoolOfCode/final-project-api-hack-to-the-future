import db from "../db/connection.js";

export async function getAllActivities() {
  const result = await db.query(`SELECT * FROM activities;`);
  return result.rows;
}
