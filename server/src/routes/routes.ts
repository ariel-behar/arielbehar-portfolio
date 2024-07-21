import { Router, Request, Response } from 'express';

import formController from '../controllers/formController.js'

const router = Router()

router.use('/form', formController)

export default router;