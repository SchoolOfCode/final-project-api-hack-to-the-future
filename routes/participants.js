import express from "express";
import {
  upsertPartcipantsRow,
  getActivitiesByRole,
} from "../models/participants.js";

const router = express.Router();

/* GET participants - get all activities for a user based on role */
router.get("/:participant_role", async function (req, res, next) {
  const user_id = req.headers.authorization;
  if (user_id) {
    try {
      const participant_role = req.params.participant_role;
      const activities = await getActivitiesByRole(
        user_id,
        participant_role,
        
      );
      res.json({
        success: true,
        payload: activities,
      });
    } catch (error) {
      next(error);
    }
  } else {
    res.json({ success: false, message: "Missing authorization header" });
  }
});

/* PUT participants - create or update a row on the particpants table */
router.put("/", async function (req, res, next) {
  const user_id = req.headers.authorization;
  if (user_id) {
    try {
      const activity_id = req.body.activity_id;
      const participant_role = req.body.participant_role;
      const users = await upsertPartcipantsRow(
        user_id,
        activity_id,
        participant_role
      );
      res.json({
        success: true,
        payload: users,
      });
    } catch (error) {
      next(error);
    }
  } else {
    res.json({ success: false, message: "Missing authorization header" });
  }
});

export default router;
