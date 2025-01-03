import Admin from '../models/Admin.js';

export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const validateAdmin = async (req, res) => {
    const { nombre, contraseña } = req.body;
  
    try {
      // Validación de los campos: que no sean vacíos
      if (!nombre || !contraseña) {
        return res.status(400).json({ error: 'Los campos "nombre" y "contraseña" son obligatorios' });
      }
  
      // Consultar si existe un Admin con el ID_Admin y Nombre proporcionados
      const existingAdmin = await Admin.findOne({ where: { nombre, contraseña } });
  
      // Si no se encuentra un registro que coincida
      if (!existingAdmin) {
        return res.status(404).json({ error: 'No se encontró un Admin con los datos proporcionados' });
      }
  
      // Si todo es correcto y se encuentra el Admin
      return res.status(200).json({ message: 'Admin encontrado, validación exitosa' });
  
    } catch (error) {
      console.error('Error al validar los datos:', error);
      return res.status(500).json({ error: 'Hubo un problema con la validación' });
    }
  };