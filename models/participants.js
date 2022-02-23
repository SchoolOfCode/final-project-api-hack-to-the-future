import db from "../db/connection.js";

export async function upsertPartcipantsRow(userId, activityId, role) {
  const sqlString = `INSERT INTO participants 
    (user_id ,activity_id, participant_role)
    VALUES ($1, $2, $3) 
    ON CONFLICT DO NOTHING RETURNING *;`;
  const result = await db.query(sqlString, [userId, activityId, role]);
  return result.rows;
}
