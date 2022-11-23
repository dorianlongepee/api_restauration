export const signup = {
    tags: ['User'],
    description: 'Créer un user',
    parameters: [
        {
            in: 'body',
            name: 'user',
            consumes: 'application/json',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    mail: {
                        type: 'string',
                        example: 'dorianlongepee.pro@gmail.com',
                    },
                    password: {
                        type: 'string',
                        example: '$2b$10$7lt5lAMFqJDsLIuN5TbiVOdJDZQEDAIRbs2Hilu1BU7K1w57rSFz6',
                    },
                    nom: {
                        type: 'string',
                        example: 'Doe'
                    },
                    prenom: {
                        type:'string',
                        example: 'John'
                    },
                    admin:{
                        type:'boolean',
                        example: true
                    }
                },
            },
        },
    ],
    responses: {
        '201': {
            description: 'User créé',
        },
    },
};