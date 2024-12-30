import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); 

// Verificación de que las variables de entorno están cargadas
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_SCHEMA || !process.env.DB_PORT) {
    console.error("Faltan variables de entorno");
    process.exit(1); // Salir si faltan las variables
}

const db = new Sequelize(
    process.env.DB_SCHEMA,   // El nombre de la base de datos
    process.env.DB_USER,     // El usuario de la base de datos
    process.env.DB_PASS,     // La contraseña de la base de datos
    {
        host: process.env.DB_HOST,  // El host de la base de datos
        port: process.env.DB_PORT,  // El puerto de la base de datos
        dialect: 'mysql',           // El dialecto de base de datos (MySQL)
    }
);

// Verificación de conexión
db.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

export default db;
