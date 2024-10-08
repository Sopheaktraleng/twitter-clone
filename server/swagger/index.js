const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const setupSwagger = (app) => {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Twitter Clone API',
                version: '1.0.0',
            },
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: 'http',
                        in: 'header',
                        name: 'Authorization',
                        scheme: 'bearer',
                        bearerFormat: 'JWT'
                    }
                },
                security: [{
                    bearerAuth: []
                }]
            },
        },
        apis: ['./routes/*.js'],
    };

    const openapiSpecification = swaggerJsdoc(options)
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
}

module.exports = { setupSwagger }