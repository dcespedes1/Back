import express from 'express';
import { getAllMoviles, getMovil, createMovil, updateMovil, deleteMovil } from '../controllers/movil.js';
const router = express.Router();

router.get('/Movil', getAllMoviles);
router.get('/Movil/:ID_Movil', getMovil);
router.post('/Movil', createMovil);
router.put('/Movil/:ID_Movil', updateMovil);
router.delete('/Movil/:ID_Movil', deleteMovil);

export default router;