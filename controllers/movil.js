import Movil from '../models/movil.js';

// Obtener todos los registros de Movil
export const getAllMoviles = async (req, res) => {
    try {
        const moviles = await Movil.findAll(); // Cambiado el nombre de la variable
        res.json(moviles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un registro de Movil por ID
export const getMovil = async (req, res) => {
    try {
        const { ID_Movil } = req.params;
        if (!ID_Movil) {
            return res.status(400).json({ error: 'El parámetro ID_Movil es requerido' });
        }
        const movil = await Movil.findByPk(ID_Movil);
        if (!movil) {
            return res.status(404).json({ error: 'Movil no encontrado' });
        }
        res.json(movil);
    } catch (error) {
        console.error('Error al obtener el movil:', error);
        res.status(500).json({ error: 'Error al obtener el movil' });
    }
};

// Crear un registro de Movil
export const createMovil = async (req, res) => {
    try {
        await Movil.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un registro de Movil existente
export const updateMovil = async (req, res) => {
    try {
        const { ID_Movil } = req.params;
        if (!ID_Movil) {
            return res.status(400).json({ error: 'El parámetro ID_Movil es requerido' });
        }
        const movil = await Movil.findByPk(ID_Movil);
        if (!movil) {
            return res.status(404).json({ error: 'Movil no encontrado' });
        }
        await Movil.update(req.body, {
            where: { ID_Movil }
        });
        res.json({
            message: "¡Actualización correcta!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un registro de Movil
export const deleteMovil = async (req, res) => {
    try {
        const { ID_Movil } = req.params;
        if (!ID_Movil) {
            return res.status(400).json({ message: "ID_Movil no proporcionado" });
        }
        const movil = await Movil.findOne({
            where: { ID_Movil }
        });
        if (!movil) {
            return res.status(404).json({
                message: "Movil no encontrado"
            });
        }
        await Movil.destroy({
            where: { ID_Movil }
        });
        res.json({
            message: "¡Eliminación correcta!"
        });
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: error.message });
    }
};
