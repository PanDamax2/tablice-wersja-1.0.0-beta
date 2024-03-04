import { DataTypes, Model } from "sequelize";
import db from "../db.js";

class Classroom extends Model {}

Classroom.init(
    {
        classroom_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        html: DataTypes.TEXT,
        manual_plan: DataTypes.TEXT,
        show_manual: DataTypes.BOOLEAN,
    },
    {
        sequelize: db,
        modelName: "classroom",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    }
);

export default Classroom;
