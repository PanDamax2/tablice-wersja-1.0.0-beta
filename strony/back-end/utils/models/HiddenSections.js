import { Model, DataTypes } from "sequelize";
import db from "../db.js";

class HiddenSections extends Model {}

HiddenSections.init(
    {
        hidden_sections_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        classrooms: {
            type: DataTypes.TINYINT,
            defaultValue: null,
        },
        information: {
            type: DataTypes.TINYINT,
            defaultValue: null,
        },
        replacements: {
            type: DataTypes.TINYINT,
            defaultValue: null,
        },
        slider: {
            type: DataTypes.TINYINT,
            defaultValue: null,
        },
    },
    {
        sequelize: db,
        modelName: "HiddenSections",
        tableName: "hidden_sections",
        timestamps: false,
    }
);

export default HiddenSections;
