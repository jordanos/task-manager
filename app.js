const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const path = require("path");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const errorHandler = require("./middlewares/errorHandler");

// Load Config File
dotenv.config({ path: "./config/config.env" });

// Connect To Database
db()
  .then()
  .catch((e) => console.log(e));

// Express App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(cors());

// api automatic documentaion
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Todo API",
      description: "Todo API documentaion.",
      contact: {
        name: "Jordan",
        email: "jordanoswork2021@gmail.com",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Load Routes
const usersRoute = require("./routes/users");
const tasksRoute = require("./routes/tasks");
// const authRoute = require("./routes/auth");

// Use Routes
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/tasks", tasksRoute);
// app.use("/api/v1/auth", authRoute);

// Error handler middleware
app.use(errorHandler);

module.exports = app;
