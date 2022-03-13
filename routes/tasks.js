const express = require("express");
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  //   deleteUser,
} = require("../controllers/taskController");

const router = express.Router();

/**
 *
 *@swagger
 *components:
 *  schemas:
 *    Task:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: String
 *          description: The auto-generated id of the user.
 *        name:
 *          type: string
 *          description: name of the user.
 *        email:
 *          type: string
 *          description: email of user.
 *        password:
 *          type: string
 *          description: password of user.
 *        createdAt:
 *          type: string
 *          format: date
 *          description: The date of the record creation.
 *      example:
 *      name: Abebe
 *      email: abebe@xyz.com
 */

/**
 *@swagger
 *tags:
 *  name: Tasks
 *  description: API to manage users.
 */

router
  .route("/")
  /**
   *@swagger
   *path:
   * /api/v1/tasks/:
   *   get:
   *     summary: Lists all the tasks
   *     tags: [Tasks]
   *     responses:
   *       "200":
   *         description: list of tasks.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Task'
   */
  .get(getTasks)
  /**
   *@swagger
   *path:
   * /api/v1/tasks/:
   *   post:
   *     summary: Creates a Task.
   *     tags: [Tasks]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Task'
   *     responses:
   *       "201":
   *         description: returnes data object with acknowledged=true.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Task'
   */
  .post(createTask);

router
  .route("/:id")
  /**
   *@swagger
   *path:
   * /api/v1/tasks/{id}:
   *   get:
   *     summary: gets a task.
   *     tags: [Tasks]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The task id
   *     responses:
   *       "200":
   *         description: returnes a task.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Task'
   */
  .get(getTask)
  /**
   *@swagger
   *path:
   * /api/v1/tasks/{id}:
   *   put:
   *     summary: edits/updates a task.
   *     tags: [Tasks]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The task id
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Task'
   *     responses:
   *       "200":
   *         description: returnes data object with acknowledged=true.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Task'
   */
  .put(updateTask)
  /**
   *@swagger
   *path:
   * /api/v1/tasks/{id}:
   *   delete:
   *     summary: deletes a task.
   *     tags: [Tasks]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The task id
   *     responses:
   *       "200":
   *         description: returnes data object with acknowledged=true.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Task'
   */
  .delete(deleteTask);

module.exports = router;
