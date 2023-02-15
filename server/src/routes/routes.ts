import { Router, Request, Response } from 'express';

import formController from '../controllers/form.controller.js'

const router = Router()

router.use('/form', formController)

export default router;