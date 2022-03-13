const request = require("supertest");
const app = require("./app");

// /users integration test
describe("Users API endpoint", () => {
  it("GET /users -> list of users", () => {
    return request(app)
      .get("/api/v1/users")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              email: expect.any(String),
            }),
          ])
        );
      });
  });

  it("POST /users -> creates a user", () => {
    return request(app)
      .post("/api/v1/users")
      .send({
        id: "622c9a09feb969716ec37c23",
        name: "lalala",
        email: "lalala@xyz.com",
        password: "123456",
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            email: expect.any(String),
          })
        );
      });
  });

  it("POST /users -> create duplicate user email", () => {
    return request(app)
      .post("/api/v1/users")
      .send({
        id: "622c9a09feb969716ec37c23",
        name: "abebe",
        email: "abc@xyz.com",
        password: "123456",
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

  it("GET /users/id -> gets a user", () => {
    return request(app)
      .get("/api/v1/users/622c9a09feb969716ec37c23")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            email: expect.any(String),
          })
        );
      });
  });

  it("PUT /users/id -> edits a user", () => {
    return request(app)
      .put("/api/v1/users/622c9a09feb969716ec37c23")
      .send({ name: "abebu" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            acknowledged: true,
          })
        );
      });
  });

  it("DELETE /users/id -> deletes a user", () => {
    return request(app)
      .delete("/api/v1/users/622c9a09feb969716ec37c23")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            acknowledged: true,
          })
        );
      });
  });
});

// tasks integration test
describe("Tasks API endpoint", () => {
  it("GET /tasks -> list of tasks", () => {
    return request(app)
      .get("/api/v1/tasks")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              title: expect.any(String),
              desc: expect.any(String),
              start: expect.any(String),
              end: expect.any(String),
              createdAt: expect.any(String),
              isDone: expect.any(Boolean),
              owner: expect.any(String),
            }),
          ])
        );
      });
  });

  it("POST /tasks -> creates a task", () => {
    return request(app)
      .post("/api/v1/tasks")
      .send({
        id: "622de5b5a98bba5050e9c5aa",
        title: "new task",
        desc: "new task description",
        start: "12/01/22",
        end: "12/01/22",
        owner: "622ce7f6ba8305f08f59cebf",
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            title: expect.any(String),
            desc: expect.any(String),
            start: expect.any(String),
            end: expect.any(String),
            owner: expect.any(String),
          })
        );
      });
  });

  it("POST /tasks -> create task without title", () => {
    return request(app)
      .post("/api/v1/tasks")
      .send({
        desc: "lalala@xyz.com",
        start: "",
        end: "",
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

  it("GET /tasks/id -> gets a specific task", () => {
    return request(app)
      .get("/api/v1/tasks/622de5b5a98bba5050e9c5aa")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            title: expect.any(String),
            desc: expect.any(String),
            start: expect.any(String),
            end: expect.any(String),
            owner: expect.any(String),
          })
        );
      });
  });

  it("PUT /users/id -> edits a task", () => {
    return request(app)
      .put("/api/v1/tasks/622de5b5a98bba5050e9c5aa")
      .send({ title: "aacsadc" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            acknowledged: true,
          })
        );
      });
  });

  it("DELETE /tasks/id -> deletes a task", () => {
    return request(app)
      .delete("/api/v1/tasks/622de5b5a98bba5050e9c5aa")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.objectContaining({
            acknowledged: true,
          })
        );
      });
  });
});
