"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDefinition = void 0;
var aliments_swagger_1 = require("./swaggerFiles/aliments.swagger");
var plats_swagger_1 = require("./swaggerFiles/plats.swagger");
var users_swagger_1 = require("./swaggerFiles/users.swagger");
exports.swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API',
        version: '1.0.0',
        description: 'Documentation API Restauration [Work to do]'
    },
    servers: [
        {
            url: 'http://localhost:3000/',
            description: 'Dev Server'
        }
    ],
    paths: {
        '/aliments': {
            get: aliments_swagger_1.getAllAliments,
            post: aliments_swagger_1.insertAliment
        },
        '/aliments/{id}': {
            get: aliments_swagger_1.getOneAliment,
            put: aliments_swagger_1.updateAliment,
            delete: aliments_swagger_1.removeAliment
        },
        '/aliments/types/{type}': {
            get: aliments_swagger_1.getAlimentsFromType
        },
        '/plats': {
            get: plats_swagger_1.getAllPlats,
            post: plats_swagger_1.insertPlat
        },
        '/plats/{id}': {
            get: plats_swagger_1.getOnePlat,
            put: plats_swagger_1.updatePlat,
            delete: plats_swagger_1.removePlat
        },
        '/plats/types/{type}': {
            get: plats_swagger_1.getPlatsFromType
        },
        '/auth/signup': {
            post: users_swagger_1.signup
        },
    }
};
//# sourceMappingURL=swagger.js.map