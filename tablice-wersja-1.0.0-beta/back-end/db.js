import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const db = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: "mysql",
        port: 3306,
    }
);

export default db;
