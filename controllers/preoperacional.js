import Preoperacional from '../models/preoperacional.js';
import Conductor from '../models/Conductor.js';

export const getAllPreoperacionales = async (req, res) => {
    try {
        const preoperacionales = await Preoperacional.findAll({
            include: [
                {
                    model: Conductor,
                    attributes: ['nombre']  // Solo seleccionamos el nombre del conductor
                }
            ]
        });
        res.json(preoperacionales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};;

export const getPreoperacional = async (req, res) => {  
    try {
        const { ID } = req.params;
        if (!ID) {
            return res.status(400).json({ error: 'El parámetro ID_Preoperacional es requerido' });
        }
        const preoperacional = await Preoperacional.findByPk(ID);
        if (!preoperacional) {
            return res.status(404).json({ error: 'Preoperacional no encontrado' });
        }
        res.json(preoperacional);
    } catch (error) {
        console.error('Error al obtener el preoperacional:', error);
        res.status(500).json({ error: 'Error al obtener el preoperacional' });
    }
};

export const createPreoperacional = async (req, res) => {
    try {
        await Preoperacional.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePreoperacional = async (req, res) => {
    try {
        const { ID } = req.params;
        if (!ID) {
            return res.status(400).json({ error: 'El parámetro ID_Preoperacional es requerido' });
        }
        const preoperacional = await Preoperacional.findByPk(ID);
        if (!preoperacional) {
            return res.status(404).json({ error: 'Preoperacional no encontrado' });
        }
        await Preoperacional.update(req.body, {
            where: { ID }
        });
        res.json({
            message: "¡Actualización correcta!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePreoperacional = async (req, res) => {
    try {
        const { ID } = req.params;
        if (!ID) {
            return res.status(400).json({ message: "ID_Preoperacional no proporcionado" });
        }
        const preoperacional = await Preoperacional.findOne({
            where: { ID }
        });
        if (!preoperacional) {
            return res.status(404).json({ message: "Preoperacional no encontrado" });
        }
        await Preoperacional.destroy({
            where: { ID }
        });
        res.json({
            message: "¡Eliminación correcta!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}