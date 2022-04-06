const express = require("express");
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  //   deleteUser,
} = require("../controllers/taskController");
const { loginReq } = require("../middlewares/authMiddleware");
const { authorizeTask } = require("../middlewares/authorizationMiddleware");

const router = express.Router();

/**
 *
 *@swagger
 *components:
 *  schemas:
 *    Task:
 *      type: object
 *      required:
 *        - title
 *        - description
 *        - date
 *        - assignedTo
 *      properties:
 *        id:
 *          type: String
 *          description: The auto-generated id of the task.
 *        title:
 *          type: string
 *          description: title of the task.
 *        description:
 *          type: string
 *          description: description of the task.
 *        date:
 *          type: string
 *          format: date
 *          description: The start time of the task.
 *        status:
 *          type: string
 *          description: Status of task (todo | progress | done).
 *        assignedTo:
 *          type: string
 *          description: user id that this task has been assigned to.
 *        createdAt:
 *          type: string
 *          format: date
 *          description: The date of the record creation.
 *        owner:
 *          type: string
 *          description: Task owner/user id.
 *      example:
 *        title: Task
 *        description: new task for today
 *        date: 12/12/22
 *        status: todo
 *        assignedTo: 622de5fed3f42ebf99d1b5de
 */

/**
 *@swagger
 *tags:
 *  name: Tasks
 *  description: API to manage tasks.
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
  .get(loginReq, getTasks)
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
  .post(loginReq, createTask);

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
  .get(loginReq, authorizeTask, getTask)
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
  .put(loginReq, authorizeTask, updateTask)
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
  .delete(loginReq, authorizeTask, deleteTask);

module.exports = router;
