import express from "express";
import { getAllUsers, createUser } from "../models/users.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const user_id = req.headers.authorization;
  if (user_id) {
    try {
      const users = await getAllUsers();

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

/* PUT - create a new user if one with this ID doesn't exist yet */
router.put("/", async function (req, res, next) {
  const user_id = req.headers.authorization;
  if (user_id) {
    try {
      const user_name = req.body.user_name;

      const email = req.body.email;

      const newUser = await createUser(user_id, user_name, email);

      res.json({
        success: true,
        payload: newUser,
      });
    } catch (error) {
      next(error);
    }
  } else {
    res.json({ success: false, message: "Missing authorization header" });
  }
});

export default router;
