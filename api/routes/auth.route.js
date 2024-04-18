import express from 'express';
import { google, register } from '../controllers/auth.controller.js';
import { login } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google', google);

export default router;