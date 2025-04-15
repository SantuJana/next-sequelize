import { DataTypes, Model } from "sequelize"
import sequelize from "@/db_connection";
import User from "./User";

class Role extends Model {
    declare id: number;
    declare userId: number;
    declare role: string;
}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'roles',
        sequelize,
        timestamps: false
    }
)

User.hasOne(Role, {foreignKey: "userId"});
Role.belongsTo(User, {foreignKey: "userId"});

export default Role;