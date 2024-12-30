import Conductor  from '../models/Conductor.js';

export const getAllConductores = async (req, res) => {
    try {
        const Conductores = await Conductor.findAll(); // Cambiado el nombre de la variable
        res.json(Conductores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un registro de Conductor por ID
export const getConductores = async (req, res) => {
    try {
        const { ID_Conductor } = req.params;
        if (!ID_Conductor) {
            return res.status(400).json({ error: 'El parámetro ID_Conductor es requerido' });
        }
        const Conductor = await Conductor.findByPk(ID_Conductor);
        if (!Conductor) {
            return res.status(404).json({ error: 'Conductor no encontrado' });
        }
        res.json(Conductor);
    } catch (error) {
        console.error('Error al obtener el Conductor:', error);
        res.status(500).json({ error: 'Error al obtener el Conductor' });
    }
};

// Crear un registro de Conductor
export const createConductor = async (req, res) => {
    try {
        await Conductor.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un registro de Conductor existente
export const updateConductor = async (req, res) => {
    try {
        const { ID_Conductor } = req.params;
        if (!ID_Conductor) {
            return res.status(400).json({ error: 'El parámetro ID_Conductor es requerido' });
        }
        const Conductor = await Conductor.findByPk(ID_Conductor);
        if (!Conductor) {
            return res.status(404).json({ error: 'Conductor no encontrado' });
        }
        await Conductor.update(req.body, {
            where: { ID_Conductor }
        });
        res.json({
            message: "¡Actualización correcta!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un registro de Conductor
export const deleteConductor = async (req, res) => {
    try {
        const { ID_Conductor } = req.params;
        if (!ID_Conductor) {
            return res.status(400).json({ message: "ID_Conductor no proporcionado" });
        }
        const Conductor = await Conductor.findOne({
            where: { ID_Conductor }
        });
        if (!Conductor) {
            return res.status(404).json({
                message: "Conductor no encontrado"
            });
        }
        await Conductor.destroy({
            where: { ID_Conductor }
        });
        res.json({
            message: "¡Eliminación correcta!"
        });
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: error.message });
    }
};