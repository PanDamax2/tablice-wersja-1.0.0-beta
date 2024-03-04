import { DataTypes, Model } from "sequelize";
import db from "../db.js";

class Slider extends Model {}

Slider.init(
    {
        slider_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        img_slider: DataTypes.STRING,
    },
    {
        sequelize: db,
        modelName: "slider",
        tableName: "slider",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    }
);

export default Slider;
