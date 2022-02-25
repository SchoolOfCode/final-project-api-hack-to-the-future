import express from "express";
import {
  upsertPartcipantsRow,
  getActivitiesByRole,
} from "../models/participants.js";

const router = express.Router();

/* GET participants - get all activities for a user based on role */
// CHANGED TO PATCH FOR NOW - SO FRONTEND CAN MAKE A FETCH REQUEST -- CHANGE!!!
router.patch("/", async function (req, res, next) {
  try {
    const user_id = req.body.user_id;
    const participant_role = req.body.participant_role;
    const activities = await getActivitiesByRole(user_id, participant_role);
    res.json({
      success: true,
      payload: activities,
    });
  } catch (error) {
    next(error);
  }
});

/* PUT participants - create or update a row on the particpants table */
router.put("/", async function (req, res, next) {
  try {
    const userId = req.body.userId;
    const activityId = req.body.activityId;
    const role = req.body.role;
    const users = await upsertPartcipantsRow(userId, activityId, role);

    res.json({
      success: true,
      payload: users,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
