import {
    getAllAliments,
    getOneAliment,
    removeAliment,
    getAlimentsFromType,
    insertAliment,
    updateAliment
} from './swaggerFiles/aliments.swagger';


import {
    getOnePlat,
    getAllPlats,
    getPlatsFromType,
    removePlat,
    updatePlat,
    insertPlat
} from "./swaggerFiles/plats.swagger";

import {
    signup
} from "./swaggerFiles/users.swagger";

export const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API',
        version: '1.0.0',
        description: 'Documentation API Restauration [Work to do]'
    },
    servers:[
        {
            url: 'http://localhost:3000/',
            description: 'Dev Server'
        }
    ],
    paths: {
        '/aliments': {
            get: getAllAliments,
            post: insertAliment
        },
        '/aliments/{id}':{
            get: getOneAliment,
            put: updateAliment,
            delete: removeAliment
        },
        '/aliments/types/{type}':{
            get: getAlimentsFromType
        },
        '/plats':{
            get:getAllPlats,
            post:insertPlat
        },
        '/plats/{id}':{
            get:getOnePlat,
            put:updatePlat,
            delete: removePlat
        },
        '/plats/types/{type}':{
            get: getPlatsFromType
        },
        '/auth/signup':{
            post: signup
        },
    }
}