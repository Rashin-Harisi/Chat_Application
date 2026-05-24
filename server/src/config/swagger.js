const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title : "Real_Time Chat App APIs",
            version: "1.0.0",
            description: "API documentation for the real-time chat application",
        },
        servers: [
            {
                url : "http://localhost:3001",
                description: "Local development server",
            },
        ],
    },
    apis : [
        "./src/routes/*.js",
        "./src/swagger/*.js",
    ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;