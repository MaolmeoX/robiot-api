import { SwaggerOptions } from 'swagger-ui-express';

export const SwaggerConfig: SwaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        info: {
            title: 'AlterMap',
            version: '1.0.0',
            description: 'Welcome on AlterMap REST API',
            license: {
                name: 'MIT',
                url: 'https://choosealicense.com/licenses/mit/',
            },
            contact: {
                name: 'AlterMap',
                url: 'https://altermap.io/',
                email: 'contact@altermap.io',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000/api/',
            },
        ],
    },
    apis: ['./src/swagger-doc/*.spec.yml'],
};
