const express = require("express");
const {
  listAdmins,
  createAdmin,
  listUsers,
  listUserTasks,
  listTasks,
} = require("../controllers/adminController");

const router = express.Router();

/**
 *
 *@swagger
 *components:
 *  schemas:
 *    Admin:
 *      type: object
 *      required:
 *        - owner
 *      properties:
 *        id:
 *          type: String
 *          description: The auto-generated id of the document.
 *        owner:
 *          type: string
 *          description: id pointint to the admin(user) data.
 *        canRead:
 *          type: boolean
 *          description: tells if admin can read records.
 *        canWrite:
 *          type: boolean
 *          description: tells if admin can write records.
 *        canAddAdmin:
 *          type: boolean
 *          description: tells if admin can add other admins.
 *        canRemoveAdmin:
 *          type: boolean
 *          description: tells if admin can remove other admins.
 *      example:
 *        owner: 623048dda75355df0e59ee5e
 *        canRead: true
 *        canWrite: true
 *        canAddAdmin: false
 *        canReamoveAdmin: false
 */

/**
 *@swagger
 *tags:
 *  name: Admins
 *  description: API to manage admins.
 */

router
  .route("")
  /**
   *@swagger
   *path:
   * /api/v1/admins/:
   *   get:
   *     summary: Lists all the admins
   *     tags: [Admins]
   *     responses:
   *       "200":
   *         description: returns list of admins.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Admin'
   */
  .get(listAdmins)
  /**
   *@swagger
   *path:
   * /api/v1/admins/:
   *   post:
   *     summary: Creates an admin.
   *     tags: [Admins]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Admin'
   *     responses:
   *       "201":
   *         description: returns data object with acknowledged=true.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Admin'
   */
  .post(createAdmin);

router
  .route("/manage/users")
  /**
   *@swagger
   *path:
   * /api/v1/admins/manage/users/:
   *   get:
   *     summary: Lists all the users
   *     tags: [Admins]
   *     responses:
   *       "200":
   *         description: list of users.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   */
  .get(listUsers);

router
  .route("/manage/tasks")
  /**
   *@swagger
   *path:
   * /api/v1/admins/manage/tasks/:
   *   get:
   *     summary: Lists all the tasks
   *     tags: [Admins]
   *     responses:
   *       "200":
   *         description: list of tasks.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Task'
   */
  .get(listTasks);

router
  .route("/manage/users/:id/tasks")
  /**
   *@swagger
   *path:
   * /api/v1/admins/manage/users/{id}/tasks/:
   *   get:
   *     summary: Lists all the tasks of a user
   *     tags: [Admins]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user id
   *     responses:
   *       "200":
   *         description: list tasks of a user.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Task'
   */
  .get(listUserTasks);

module.exports = router;
