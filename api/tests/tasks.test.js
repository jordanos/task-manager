const request = require("supertest");
const app = require("../app");
const User = require("../models/User");
const Task = require("../models/Task");
const { seedUser1, seedTask1, seedTask2 } = require("../_seedData/testData");

const jwt = require("jsonwebtoken");
const token = jwt.sign({ id: seedUser1._id }, process.env.SECRET_KEY, {
  expiresIn: "9999d",
});

const { taskSchema } = require("./schemas");

// tasks integration test
describe("Tasks API endpoint", () => {
  beforeAll(async () => {
    await User.create(seedUser1);
    await Task.create(seedTask2);
  });
  afterAll(async () => {
    await User.deleteOne({ _id: seedUser1._id });
    await Task.deleteOne({ _id: seedTask1._id });
    await Task.deleteOne({ _id: seedTask2._id });
  });

  it("GET /tasks -> fails because of authentication", () => {
    return request(app)
      .get("/api/v1/tasks")
      .expect("Content-Type", /json/)
      .expect(403)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            error: expect.any(String),
          })
        );
      });
  });

  it("GET /tasks -> list of tasks", () => {
    return request(app)
      .get("/api/v1/tasks")
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.arrayContaining([expect.objectContaining(taskSchema)])
        );
      });
  });

  it("POST /tasks -> creates a task", () => {
    return request(app)
      .post("/api/v1/tasks")
      .set("Authorization", token)
      .send(seedTask1)
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body.data).toEqual(expect.objectContaining(taskSchema));
      });
  });

  it("POST /tasks -> create task without title", () => {
    return request(app)
      .post("/api/v1/tasks")
      .set("Authorization", token)
      .send({
        description: "lalala@xyz.com",
        date: "",
        owner: "622ce7f6ba8305f08f59cebf",
      })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            error: expect.any(String),
          })
        );
      });
  });

  it("GET /tasks/:id -> gets a specific task", () => {
    return request(app)
      .get(`/api/v1/tasks/${seedTask1._id}`)
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(expect.objectContaining(taskSchema));
      });
  });

  it("PUT /tasks/:id -> edits a task", () => {
    return request(app)
      .put(`/api/v1/tasks/${seedTask1._id}`)
      .set("Authorization", token)
      .send({ ...seedTask1, title: "aacsadc" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(expect.objectContaining(taskSchema));
      });
  });

  it("DELETE /tasks/:id -> deletes a task", () => {
    return request(app)
      .delete(`/api/v1/tasks/${seedTask1._id}`)
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            acknowledged: expect.any(Boolean),
          })
        );
      });
  });
});
