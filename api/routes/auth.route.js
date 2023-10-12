import express from 'express'
import { auth } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signin',auth)

export default router