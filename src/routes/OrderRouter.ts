import express from "express";
// import { OrderController } from "../controller/orderController";
import { OrderController } from "../controller/orderController";
export const register = (app: express.Application) => {
  const OrderRouter = express.Router();

  const controller = new OrderController();
  //define route handler
  OrderRouter.get("/all", controller.get);

  OrderRouter.get("/:id", controller.getById);

  OrderRouter.post("/", controller.create);

  OrderRouter.put("/:id", controller.update);

  OrderRouter.delete("/:id", controller.del);

  app.use("/api/v1/order", OrderRouter); 
};
