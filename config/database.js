require("dotenv").config();
const path = require("path");

const DB_TEST_FILE_PATH = path.join(__dirname, "../db/test.sqlite");
const {DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT} = process.env;

module.exports = {
    development: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
        ssl: true,
    },
    test: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: `${DB_NAME}_test`,
        host: DB_HOST,
        port: DB_PORT,
        storage: DB_TEST_FILE_PATH,
        logging: false,
        dialect: "postgres",
    },
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};
