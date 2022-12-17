const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

 const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "Documentacion de mi API Curso de Node REST",
      version: "1.0.1",
    },
    servers: [
      {
        url: "http://localhost:3001/api",
      },
      {
        url: "https://afternoon-journey-32165.herokuapp.com/api",
      },
    ],
    components: {
      securitySchemes:{
          bearerAuth:{
              type:"http",
              scheme:"bearer"
          }
      },
      schemas: {
        user: {
          type: "object",
          required: ["name", "age", "email", "password"],
          properties: {
            name: {
              type: "string",
            },
            age: {
              type: "integer",
            },
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
        },
      },
    },
  };
  
  /**
   * Opciones
   */
  const options = {
    swaggerDefinition,
    apis: ["./routes/*.js"],
  };
  
  const openApiConfigration = swaggerJsdoc(options);
  
  module.exports = openApiConfigration;