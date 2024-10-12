const express = require('express');
const userRouter = express.Router();
const {createUser,getUserById, getAllUser, updateById, deleteById} = require('../controllers/users');
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email
 *         username:
 *           type: string
 *           description: The user's username
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: The user's date of birth
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         email: example@example.com
 *         username: johndoe
 *         dateOfBirth: 2000-01-01
 *         password: secret123
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with an email, username, date of birth, and password.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 dateOfBirth:
 *                   type: string
 *                   format: date
 *       400:
 *         description: Bad request
 */
userRouter.post('/', createUser)
userRouter.get('/',getAllUser)
userRouter.get('/:id',getUserById)
userRouter.put('/:id',updateById)
userRouter.delete('/:id',deleteById)

module.exports = userRouter;
