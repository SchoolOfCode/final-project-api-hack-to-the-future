import express from "express";
import { getAllActivities } from "../models/activities.js";

const router = express.Router();

/* GET activities listing. */
router.get("/", async function (req, res, next) {
  const location = req.query.location;
  const date = req.query.date;
  const type = req.query.type;
  console.log(location, date, type);

  const activties = await getAllActivities(location, type, date);

  res.json({
    success: true,
    payload: activties,
  });
});

export default router;
