import { DataTypes, Model } from "sequelize";
import db from "../db.js";

class Header extends Model {}

Header.init(
    {
        header_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        bell: DataTypes.STRING,
        img_school_logo: DataTypes.STRING,
    },
    {
        sequelize: db,
        modelName: "header",
        tableName: "header",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    }
);

export default Header;
