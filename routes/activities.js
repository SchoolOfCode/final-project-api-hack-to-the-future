import express from "express";
import { getAllActivities, createNewActivity } from "../models/activities.js";
 

const router = express.Router();

/* GET activities listing. */
router.get("/", async function (req, res, next) {
  const location = req.query.location;
  const date = req.query.date;
  const type = req.query.type;
  console.log(location, date, type);

  const activities = await getAllActivities(location, type, date);

  res.json({
    success: true,
    payload: activties,
  });
});

// POST activity
router.post("/", async function (req, res, next) {
  const organiser_id = req.body.organiser_id;
  const location_id = req.body.location_id;
  const max_attendees = req.body.max_attendees;
  const date_time = req.body.date_time;
  const description = req.body.description;
  const type = req.body.type;
  const newActivity = await createNewActivity(
    organiser_id,
    location_id,
    max_attendees,
    date_time,
    description,
    type
  );
  res.json({
    success: true,
    payload: newActivity,
  });
});

export default router;
