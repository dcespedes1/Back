import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import db from './database/db.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.log(`El error de conexión es: ${error}`);
        process.exit(1);
    }
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));


};

startServer();