import swaggerJSDoc from "swagger-jsdoc";
const port = process.env.PORT || 3000;
export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "PitchOff API",
            version: "1.0.0",
            description: "KickOff Africa Pitch-Off backend API",
        },
        servers: [
            { url: `http://localhost:${port}`, description: "Local" },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: [
        "./src/routes/*.ts", // JSDoc on route files
        "./src/docs/*.ts", // optional: shared schemas
    ],
});
//# sourceMappingURL=swagger.js.map