export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'dbpruebageeks',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT || '3000',
    SERVER_TOKEN_SECRET: process.env.SERVER_TOKEN_SECRET || '7330798d-9fc9-4ac4-bc01-666c25b8e6d',
    SERVER_TOKEN_EXPIRETIME: process.env.SERVER_TOKEN_EXPIRETIME || 3600,
    VERSION: process.env.VERSION || '1.0.0'
};