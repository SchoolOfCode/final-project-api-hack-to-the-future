import express from "express";
import { getAllUsers, createUser } from "../models/users.js";

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

/* PUT - create a new user if one with this ID doesn't exist yet */
router.put("/", async function (req, res, next) {
  try {
    const userId = req.headers.authorization;

    const newUser = await createUser(userId);

    res.json({
      success: true,
      payload: newUser,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
