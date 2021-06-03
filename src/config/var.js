export const port = process.env.PORT || 4001;
export const database = {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pruebageeks",
    host: "localhost"
};