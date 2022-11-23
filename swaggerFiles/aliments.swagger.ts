export const getAllAliments = {
    tags: ['Aliment'],
    description: 'Retourne tous les aliments',

    responses: {
        '200': {
            description: 'Liste des aliments',
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
                                example: 'Steak',
                            },
                            type: {
                                type: 'string',
                                example: 'Viande',
                            },
                            quantite: {
                                type: 'integer',
                                example: 15,
                            },
                            date: {
                                type: 'string',
                                format: 'date',
                                example: '2022-11-03T13:10:46.931Z',
                            },
                        },
                    },
                },
            },
        },
    },
};

export const getAlimentsFromType = {
    tags: ['Aliment'],
    description: "Liste les aliments d'un type spécifique",
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
            description: "Liste les aliments d'un type spécifique",
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
                                example: 'Steak',
                            },
                            type: {
                                type: 'string',
                                example: 'Viande',
                            },
                            quantite: {
                                type: 'integer',
                                example: 15,
                            },
                            date: {
                                type: 'string',
                                format: 'date',
                                example: '2022-11-03T13:10:46.931Z',
                            },
                        },
                    },
                },
            },
        },
    },
};

export const getOneAliment = {
    tags: ['Aliment'],
    description: "Retourne un aliment en fonction de son ID",
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
            description: "Retourne un aliment en fonction de son ID",
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
                                example: 'Steak',
                            },
                            type: {
                                type: 'string',
                                example: 'Viande',
                            },
                            quantite: {
                                type: 'integer',
                                example: 15,
                            },
                            date: {
                                type: 'string',
                                format: 'date',
                                example: '2022-11-03T13:10:46.931Z',
                            },
                        },
                    },
                },
            },
        },
    },
};

export const insertAliment = {
    tags: ['Aliment'],
    description: 'Créer un aliment',
    parameters: [
        {
            in: 'body',
            name: 'aliment',
            consumes: 'application/json',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    nom: {
                        type: 'string',
                        example: 'Steak',
                    },
                    type: {
                        type: 'string',
                        example: 'Viande',
                    },
                    quantite: {
                        type: 'integer',
                        example: 15,
                    },
                },
            },
        },
    ],
    responses: {
        '201': {
            description: 'Aliment créé',
        },
    },
};

export const updateAliment = {
    tags: ['Aliment'],
    description: 'Modifier un aliment',

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
            name: 'aliment',
            consumes: 'application/json',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    nom: {
                        type: 'string',
                        example: 'Steak',
                    },
                    type: {
                        type: 'string',
                        example: 'Viande',
                    },
                    quantite: {
                        type: 'integer',
                        example: 20,
                    },
                },
            },
        },
    ],
    responses: {
        '204': {
            description: 'Aliment modifié',
        },
    },
};

export const removeAliment = {
    tags: ['Aliment'],
    description: 'Supprimer un aliment',
    security: [
        {
            bearerAuth: [],
        },
    ],
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
            description: 'Aliment supprimé',
        },
    },
};
