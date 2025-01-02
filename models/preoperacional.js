import db from '../database/db.js';
import { DataTypes } from "sequelize";
import conductor from './Conductor.js';


const Preoperacional = db.define('Preoperacional', {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  ID_Movil: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_act: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Pito: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Luz_Reversa: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Luces: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Direccionales: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Nivel_FLuido: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Fuga_Fluido: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Novedad_piezas: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Novedad_encendido: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Kilometraje: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  Sueño: {
    type: DataTypes.TIME,
    allowNull: false
  },
  Kit: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  carroceria: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Botiquin: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Interior: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Llantas: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Luz_Parqueo: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Horas_manejando: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Vision: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  pausas: {
    type: DataTypes.STRING(2),
    allowNull: false
  },
  sintomas: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Inicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  ID_Conductor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: conductor,
        key: 'ID_Conductor' 
    }
},
  imagen: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  }
}, {
  tableName: 'Preoperacional', // Asegúrate de que el nombre de la tabla coincida con el de la base de datos
  timestamps: false,  // Si no usas createdAt y updatedAt
});

Preoperacional.belongsTo(conductor, { foreignKey: 'ID_Conductor' });
export default Preoperacional;  
