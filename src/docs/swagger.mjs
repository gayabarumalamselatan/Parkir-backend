import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi API Parkir",
    description: "Dokumentasi API Parkir",
  },
  servers: [ 
    {
      url: "http://localhost:3000",
      description: "Local Server"
    },
    {
      url: "https://parkir-backend.vercel.app",
      description: "Deploy Server"
    }
  ],
};

const outputFile = "./swagger_output.json";
const endpointsFile = ["../../index.js"];

swaggerAutogen({openApi: "3.0.0"})(outputFile, endpointsFile, doc)