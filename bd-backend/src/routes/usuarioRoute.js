import express from 'express';
import * as usuarioController from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/usuarios',usuarioController.getUsuarios);
router.post('/usuarios',usuarioController.createUsuarios);

export default router;