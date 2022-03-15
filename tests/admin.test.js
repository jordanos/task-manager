const request = require("supertest");
const app = require("../app");
const User = require("../models/User");
const Task = require("../models/Task");
const Admin = require("../models/Admin");
const { seedUser1, seedUser2, seedTask1 } = require("../_seedData/testData");
const { userSchema, taskSchema, adminSchema } = require("./schemas");
const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: seedUser1._id }, process.env.SECRET_KEY, {
  expiresIn: "9999d",
});

// admins integration test
describe("Admins API endpoint", () => {
  beforeAll(async () => {
    try {
      await User.create(seedUser1);
      await User.create(seedUser2);
      await Admin.create({ owner: seedUser1._id });
      await Task.create(seedTask1);
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    try {
      await User.deleteOne({ _id: seedUser1._id });
      await Admin.deleteOne({ owner: seedUser1._id });
      await User.deleteOne({ _id: seedUser2._id });
      await Admin.deleteOne({ owner: seedUser2._id });
      await Task.deleteOne({ _id: seedTask1._id });
    } catch (e) {
      console.log(e);
    }
  });

  it("GET /admins -> list of admins", () => {
    return request(app)
      .get("/api/v1/admins")
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.arrayContaining([expect.objectContaining(adminSchema)])
        );
      });
  });

  it("POST /admins -> creates an admin", () => {
    return request(app)
      .post("/api/v1/admins")
      .set("Authorization", token)
      .send({ owner: seedUser2._id })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining(adminSchema)
        );
      });
  });

  it("GET /admins/manage/users -> list all users", () => {
    return request(app)
      .get("/api/v1/admins/manage/users")
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.arrayContaining([expect.objectContaining(userSchema)])
        );
      });
  });

  it("GET /admins/manage/tasks -> list all tasks", () => {
    return request(app)
      .get("/api/v1/admins/manage/tasks")
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.arrayContaining([expect.objectContaining(taskSchema)])
        );
      });
  });

  it("GET /admins/manage/users/:id/tasks -> list all tasks of a single user", () => {
    return request(app)
      .get(`/api/v1/admins/manage/users/${seedUser1._id}/tasks`)
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.arrayContaining([expect.objectContaining(taskSchema)])
        );
      });
  });
});
