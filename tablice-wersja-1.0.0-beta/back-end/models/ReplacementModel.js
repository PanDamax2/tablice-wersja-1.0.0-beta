import { Model, DataTypes } from "sequelize";
import db from "../db.js";

class Replacement extends Model {}

Replacement.init(
    {
        replacements_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        lesson: DataTypes.INTEGER,
        teacher: DataTypes.STRING,
        branch: DataTypes.STRING,
        subject: DataTypes.STRING,
        room: DataTypes.INTEGER,
        date: DataTypes.STRING,
        deputy: DataTypes.STRING,
    },
    { sequelize: db, modelName: "replacement", timestamps: false }
);

export default Replacement;
