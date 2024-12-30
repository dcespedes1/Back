import db from "../database/db.js";
// Importa Sequelize
import { DataTypes } from "sequelize";

const Movil = db.define('Movil', {
    ID_Movil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Placa: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    T_vinculación: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    RTM: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Exp_RTM: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Ven_RTM: {
        type: DataTypes.DATE,
        allowNull: false
    },
    RCC: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Exp_RCC: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Ven_RCC: {
        type: DataTypes.DATE,
        allowNull: false
    },
    RCE: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Exp_RCE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Ven_RCE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    SOAT: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Exp_SOAT: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Ven_SOAT: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Exp_Operacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Ven_Operacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Exp_Transito: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Ven_Transito: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'Movil',
    timestamps: false
});

export default Movil;
