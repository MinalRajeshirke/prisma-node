
import express from "express";

import { CartController } from "../controller/cartController";
export const register = (app:express.Application)=>{
    const CartRouter = express.Router();


const controller = new CartController()
//define route handler
CartRouter.get('/all', controller.get)
CartRouter.get('/:id', controller.getById)
  
  CartRouter.post('/', controller.create)
  
  CartRouter.put('/:id', controller.update)
  
  CartRouter.delete('/:id', controller.del)
  
  app.use("/api/v1/cart", CartRouter) 
}