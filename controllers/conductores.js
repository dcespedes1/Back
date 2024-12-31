import Conductor  from '../models/Conductor.js';

export const getAllConductores = async (req, res) => {
    try {
        // Obtener todos los conductores
        const conductores = await Conductor.findAll();
        
        // Enviar la respuesta con los conductores en formato JSON
        res.json(conductores);
    } catch (error) {
        // Si hay un error, devolver el mensaje de error
        res.status(500).json({ message: error.message });
    }
};
// Obtener un registro de Conductor por ID
export const getConductores = async (req, res) => {
    try {
        const { ID_Conductor } = req.params;
        
        // Check if the ID is provided
        if (!ID_Conductor) {
            return res.status(400).json({ error: 'El parámetro ID_Conductor es requerido' });
        }
        
        // Attempt to find the conductor by primary key (ID)
        const conductor = await Conductor.findByPk(ID_Conductor);
        
        // Check if the conductor was found
        if (!conductor) {
            return res.status(404).json({ error: 'Conductor no encontrado' });
        }
        
        // Return the conductor information as JSON
        res.json(conductor);
    } catch (error) {
        // Log detailed error message
        console.error('Error al obtener el conductor:', error.message);
        
        // Return a 500 error response
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
        
        // Verificar si se proporcionó el ID del conductor
        if (!ID_Conductor) {
            return res.status(400).json({ message: "ID_Conductor no proporcionado" });
        }
        
        // Buscar al conductor por su ID
        const conductor = await Conductor.findOne({
            where: { ID_Conductor }
        });
        
        // Si no se encuentra el conductor
        if (!conductor) {
            return res.status(404).json({
                message: "Conductor no encontrado"
            });
        }
        
        // Eliminar al conductor
        await conductor.destroy();
        
        // Responder con un mensaje de éxito
        res.json({
            message: "¡Eliminación correcta!"
        });
    } catch (error) {
        // Loguear el error y devolver una respuesta de error
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: error.message });
    }
};