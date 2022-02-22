import express from "express";
import { getAllActivities } from "../models/activities.js";

const router = express.Router();

/* GET activities listing. */
router.get("/", async function (req, res, next) {
  const activties = await getAllActivities();

  res.json({
    success: true,
    payload: activties,
  });
});

export default router;
