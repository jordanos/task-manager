exports.swaggerOptions = {
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
    security: [{ bearerAuth: [] }],
  },
  apis: ["./routes/*.js"],
};
