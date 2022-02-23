import express from "express";
import { upsertPartcipantsRow } from "../models/participants.js";

const router = express.Router();

/* PUT participants - create or update a row on the particpants table */
router.put("/", async function (req, res, next) {
  const userId = req.body.userId;
  const activityId = req.body.activityId;
  const role = req.body.role;
  const users = await upsertPartcipantsRow(userId, activityId, role);

  res.json({
    success: true,
    payload: users,
  });
});

export default router;
