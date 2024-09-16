
import express from "express";

// import { WishlistController } from "../controller/wishlistController";
import { WishlistController } from "../controller/wishlistController";
export const register = (app:express.Application)=>{
    const WishlistRouter = express.Router();

const controller = new WishlistController()
//define route handler
WishlistRouter.get('/all', controller.get)
WishlistRouter.get('/:id', controller.getById)
  
  WishlistRouter.post('/', controller.create)
  
  WishlistRouter.put('/:id', controller.update)
  
 WishlistRouter.delete('/:id', controller.del)
  
  app.use("/api/v1/wishlist", WishlistRouter) //mouted UserRouter to this path
}