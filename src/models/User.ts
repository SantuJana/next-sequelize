import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";

class User extends Model {
    declare id: number;
    declare name: string;
}

User.init(
    {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: "users",
        sequelize,
        timestamps: false,
    }
)

export default User;