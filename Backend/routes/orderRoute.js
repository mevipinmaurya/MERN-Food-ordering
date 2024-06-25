import express from 'express'
import { placeOrder } from '../controllers/OrderController.js'
import authMiddleware from '../middleware/auth.js';
const orderRouter = express.Router()

orderRouter.post("/order", authMiddleware, placeOrder);

export default orderRouter;