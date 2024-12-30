import db from "../database/db.js";
// Importa Sequelize
import { DataTypes } from "sequelize";

const Conductor = db.define('Conductor', {
    ID_Conductor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    fechaExp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaVen: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'Conductor',
    timestamps: false
});

export default Conductor;