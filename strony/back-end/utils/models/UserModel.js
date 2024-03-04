import { DataTypes, Model } from "sequelize";
import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

class User extends Model {
    generateAuthToken() {
        const token = jwt.sign(
            { user_id: this.user_id, login: this.login, admin: this.admin },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        return token;
    }
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        admin: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        login: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            get() {
                return () => this.getDataValue("password");
            },
            set(value) {
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(value, salt);
                this.setDataValue("password", hashedPassword);
            },
        },
        avatar: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize: db,
        modelName: "user",
        tableName: "users",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    }
);

export default User;
