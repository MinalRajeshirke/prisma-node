
//use express.route
import express from "express";
// create an instance of controller class to acess get del..
import { UserController } from "../controller/userController";
// import { kMaxLength } from "buffer";

export const register = (app:express.Application)=>{
    const UserRouter = express.Router();
// created router i.e. UserRouter by calling express.Router

const controller = new UserController()
//define route handler
UserRouter.get('/all', controller.get)
UserRouter.get('/:id', controller.getById)
  //create
  UserRouter.post('/', controller.create)
  
  UserRouter.put('/:id', controller.update)
  
  UserRouter.delete('/:id', controller.del)
  
  app.use("/api/v1/user", UserRouter) //mouted UserRouter to this path
}

