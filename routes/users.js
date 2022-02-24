import express from "express";
import { getAllUsers } from "../models/users.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await getAllUsers();

    res.json({
      success: true,
      payload: users,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
