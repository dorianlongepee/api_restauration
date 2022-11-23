"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePlat = exports.updatePlat = exports.insertPlat = exports.getOnePlat = exports.getPlatsFromType = exports.getAllPlats = void 0;
exports.getAllPlats = {
    tags: ['Plat'],
    description: 'Retourne tous les plats',
    responses: {
        '200': {
            description: 'Liste des plats',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string',
                                example: '6363bdd6fbb45b32f05708b9',
                            },
                            nom: {
                                type: 'string',
                                example: 'Burger',
                            },
                            aliments: {
                                type: 'array',
                                example: [{
                                        "_id": "63790dc96191d80e19b504f8",
                                        "nom": "Steak",
                                        "quantite": 2
                                    },
                                    {
                                        "_id": "6379134389e63950a786a525",
                                        "nom": "Salade",
                                        "quantite": 1
                                    },
                                    {
                                        "_id": "6379135a89e63950a786a529",
                                        "nom": "Cheddar",
                                        "quantite": 2
                                    },
                                    {
                                        "_id": "6379136c89e63950a786a52b",
                                        "nom": "Pain à burger",
                                        "quantite": 1
                                    }]
                            },
                            prix: {
                                type: 'integer',
                                example: 15,
                            },
                            disponible: {
                                type: 'boolean',
                                example: true
                            },
                            image: {
                                type: 'string',
                                example: 'https://assets.afcdn.com/recipe/20161114/55392_w1024h576c1cx2808cy1872.jpg'
                            }
                        },
                    },
                },
            },
        },
    },
};
exports.getPlatsFromType = {
    tags: ['Plat'],
    description: "Liste les plats d'un type spécifique",
    parameters: [
        {
            in: 'path',
            name: 'type',
            required: true,
            schema: {
                type: 'string'
            },
        },
    ],
    responses: {
        '200': {
            description: "Liste les plats d'un type spécifique",
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string',
                                example: '6363bdd6fbb45b32f05708b9',
                            },
                            nom: {
                                type: 'string',
                                example: 'Burger',
                            },
                            aliments: {
                                type: 'array',
                                example: [{
                                        "_id": "63790dc96191d80e19b504f8",
                                        "nom": "Steak",
                                        "quantite": 2
                                    },
                                    {
                                        "_id": "6379134389e63950a786a525",
                                        "nom": "Salade",
                                        "quantite": 1
                                    },
                                    {
                                        "_id": "6379135a89e63950a786a529",
                                        "nom": "Cheddar",
                                        "quantite": 2
                                    },
                                    {
                                        "_id": "6379136c89e63950a786a52b",
                                        "nom": "Pain à burger",
                                        "quantite": 1
                                    }]
                            },
                            prix: {
                                type: 'integer',
                                example: 15,
                            },
                            disponible: {
                                type: 'boolean',
                                example: true
                            },
                            image: {
                                type: 'string',
                                example: 'https://assets.afcdn.com/recipe/20161114/55392_w1024h576c1cx2808cy1872.jpg'
                            }
                        },
                    },
                },
            },
        },
    },
};
exports.getOnePlat = {
    tags: ['Plat'],
    description: "Retourne un plat en fonction de son ID",
    parameters: [
        {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
                type: 'string',
                example: '6363bdd6fbb45b32f05708b9',
            },
        },
    ],
    responses: {
        '200': {
            description: "Retourne un plat en fonction de son ID",
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string',
                                example: '6363bdd6fbb45b32f05708b9',
                            },
                            nom: {
                                type: 'string',
                                example: 'Burger',
                            },
                            aliments: {
                                type: 'array',
                                example: [{
                                        "_id": "63790dc96191d80e19b504f8",
                                        "nom": "Steak",
                                        "quantite": 2
                                    },
                                    {
                                        "_id": "6379134389e63950a786a525",
                                        "nom": "Salade",
                                        "quantite": 1
                                    },
                                    {
                                        "_id": "6379135a89e63950a786a529",
                                        "nom": "Cheddar",
                                        "quantite": 2
                                    },
                                    {
                                        "_id": "6379136c89e63950a786a52b",
                                        "nom": "Pain à burger",
                                        "quantite": 1
                                    }]
                            },
                            prix: {
                                type: 'integer',
                                example: 15,
                            },
                            disponible: {
                                type: 'boolean',
                                example: true
                            },
                            image: {
                                type: 'string',
                                example: 'https://assets.afcdn.com/recipe/20161114/55392_w1024h576c1cx2808cy1872.jpg'
                            }
                        },
                    },
                },
            },
        },
    },
};
exports.insertPlat = {
    tags: ['Plat'],
    description: 'Créer un plat',
    parameters: [
        {
            in: 'body',
            name: 'plat',
            consumes: 'application/json',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    nom: {
                        type: 'string',
                        example: 'Burger',
                    },
                    aliments: {
                        type: 'array',
                        example: [{
                                "_id": "63790dc96191d80e19b504f8",
                                "nom": "Steak",
                                "quantite": 2
                            },
                            {
                                "_id": "6379134389e63950a786a525",
                                "nom": "Salade",
                                "quantite": 1
                            },
                            {
                                "_id": "6379135a89e63950a786a529",
                                "nom": "Cheddar",
                                "quantite": 2
                            },
                            {
                                "_id": "6379136c89e63950a786a52b",
                                "nom": "Pain à burger",
                                "quantite": 1
                            }]
                    },
                    prix: {
                        type: 'integer',
                        example: 15,
                    },
                    disponible: {
                        type: 'boolean',
                        example: true
                    },
                    image: {
                        type: 'string',
                        example: 'https://assets.afcdn.com/recipe/20161114/55392_w1024h576c1cx2808cy1872.jpg'
                    }
                },
            },
        },
    ],
    responses: {
        '201': {
            description: 'Plat créé',
        },
    },
};
exports.updatePlat = {
    tags: ['Plat'],
    description: 'Modifier un plat',
    parameters: [
        {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
                type: 'string',
                example: '6363bdd6fbb45b32f05708b9',
            },
        },
        {
            in: 'body',
            name: 'plat',
            consumes: 'application/json',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    properties: {
                        nom: {
                            type: 'string',
                            example: 'Burger',
                        },
                        aliments: {
                            type: 'array',
                            example: [{
                                    "_id": "63790dc96191d80e19b504f8",
                                    "nom": "Steak",
                                    "quantite": 2
                                },
                                {
                                    "_id": "6379134389e63950a786a525",
                                    "nom": "Salade",
                                    "quantite": 1
                                },
                                {
                                    "_id": "6379135a89e63950a786a529",
                                    "nom": "Cheddar",
                                    "quantite": 2
                                },
                                {
                                    "_id": "6379136c89e63950a786a52b",
                                    "nom": "Pain à burger",
                                    "quantite": 1
                                }]
                        },
                        prix: {
                            type: 'integer',
                            example: 15,
                        },
                        disponible: {
                            type: 'boolean',
                            example: true
                        },
                        image: {
                            type: 'string',
                            example: 'https://assets.afcdn.com/recipe/20161114/55392_w1024h576c1cx2808cy1872.jpg'
                        }
                    },
                },
            },
        },
    ],
    responses: {
        '204': {
            description: 'Plat modifié',
        },
    },
};
exports.removePlat = {
    tags: ['Plat'],
    description: 'Supprimer un plat',
    parameters: [
        {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
                type: 'string',
                example: '6363bdd6fbb45b32f05708b9',
            },
        },
    ],
    responses: {
        '204': {
            description: 'Plat supprimé',
        },
    },
};
//# sourceMappingURL=plats.swagger.js.map