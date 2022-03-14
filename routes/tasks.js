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
 *        - title
 *        - desc
 *        - start
 *        - end
 *      properties:
 *        id:
 *          type: String
 *          description: The auto-generated id of the task.
 *        title:
 *          type: string
 *          description: title of the task.
 *        desc:
 *          type: string
 *          description: description of the task.
 *        start:
 *          type: string
 *          format: date
 *          description: The start time of the task.
 *        end:
 *          type: string
 *          format: date
 *          description: The end time of the task.
 *        isDone:
 *          type: boolean
 *          description: Status of task completion.
 *        createdAt:
 *          type: string
 *          format: date
 *          description: The date of the record creation.
 *        owner:
 *          type: string
 *          description: Task owner/user id.
 *      example:
 *      title: Task
 *      desc: new task for today
 *      start: 12/12/22
 *      end: 12/12/22
 *      owner: 622de5fed3f42ebf99d1b5de
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
