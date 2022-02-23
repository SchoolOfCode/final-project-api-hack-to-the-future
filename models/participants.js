import db from "../db/connection.js";

export async function upsertPartcipantsRow(userId, activityId, role) {
  const sqlString = `INSERT INTO participants 
    (user_id ,activity_id, participant_role)
    VALUES ($1, $2, $3) 
    ON CONFLICT (user_id, activity_id) DO UPDATE SET participant_role = $3 RETURNING *;`;
  const result = await db.query(sqlString, [userId, activityId, role]);
  return result.rows;
}
