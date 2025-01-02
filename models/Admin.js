import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Administrador = db.define('Administrador', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, {
    tableName: 'Administrador',
    timestamps: false
});

export default Administrador;