import { DataTypes, Model } from "sequelize";
import db from "../db.js";

class Information extends Model {}

Information.init(
    {
        information_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        text: DataTypes.TEXT,
        img_information: DataTypes.STRING,
        show_img: DataTypes.TINYINT,
    },
    {
        sequelize: db,
        modelName: "information",
        tableName: "information",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    }
);

export default Information;
