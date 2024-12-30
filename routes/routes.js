import express from 'express';
import { getAllMoviles, getMovil, createMovil, updateMovil, deleteMovil, validateMovil } from '../controllers/movil.js';
import { createConductor, deleteConductor, getAllConductores, getConductores, updateConductor } from '../controllers/conductores.js';

const router = express.Router();
/* rutas para movil */
router.get('/Movil', getAllMoviles);
router.get('/Movil/:ID_Movil', getMovil);
router.post('/Movil', createMovil);
router.post('/Movil/login', validateMovil);
router.put('/Movil/:ID_Movil', updateMovil);
router.delete('/Movil/:ID_Movil', deleteMovil);

/* rutas para conductor */
router.get('/Conductor', getAllConductores);
router.get('/Conductor/:ID_Conductor', getConductores);
router.post('/Conductor', createConductor);
router.put('/Conductor/:ID_Conductor', updateConductor);
router.delete('/Conductor/:ID_Conductor', deleteConductor);


export default router;