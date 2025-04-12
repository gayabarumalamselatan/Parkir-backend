const fs = require("fs")
const swaggerOutput = require("./swagger_output.json"); 
const swaggerUi = require("swagger-ui-express");
const path = require("path"); 

function docs(app){
  const css = fs.readFileSync(path.resolve(__dirname, "../../node_modules/swagger-ui-dist/swagger-ui.css"), "utf-8");

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput, {
    customCss: css,
  }))
};

module.exports = docs;