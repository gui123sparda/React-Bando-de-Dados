import express from 'express';
import * as usuarioController from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/usuarios',usuarioController.getUsuarios);
router.post('/usuarios',usuarioController.createUsuarios);
router.put('/usuarios/:id',usuarioController.updateUsuarios);
router.delete('/usuarios/:id',usuarioController.deleteUsuarios);
router.get('/usuarios/search',usuarioController.searchUsuarios);

export default router;