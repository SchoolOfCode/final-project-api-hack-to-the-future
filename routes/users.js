import express from 'express';
import { getAllUsers, createUser } from '../models/users.js';

const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
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
router.put('/', async function (req, res, next) {
    try {
        const user_id = req.headers.authorization;

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
});

export default router;
