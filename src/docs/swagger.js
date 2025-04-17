const swaggerAutogen = require("swagger-autogen")();

const doc = {
  openApi: "3.0.4",
  info: {
    version: "0.0.1",
    title: "Dokumentasi API Parkir",
    description: "Dokumentasi API Parkir",
  },

  servers: [
    {
      url: "http://localhost:3000",
      description: "Local Server",
    },
    {
      url: "https://parkir-backend.vercel.app",
      description: "Deploy Server",
    },
  ],
};

const outputFile = "./swagger_output.json";
const endpointsFile = ["../../index.js"];

// Generate the OpenAPI documentation
swaggerAutogen(outputFile, endpointsFile, doc);

// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const options = {
//   definition: {
//     openapi: "3.0.4",
//     info: {
//       title: "Dokumentasi API Parkir",
//       version: "0.0.1",
//       description: "Dokumentasi API Parkir",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//         description: "Local Server",
//       },
//       {
//         url: "https://parkir-backend.vercel.app",
//         description: "Deploy Server",
//       },
//     ],
//   },
//   apis: ["../../index.js"], // adapt to your route files
// };

// const specs = swaggerJsdoc(options);

// function docs(app) {
//   app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
// }

// module.exports = docs;