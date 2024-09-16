import express from "express";
import { ShippingController } from "../controller/shippingController";
//import { CartController } from "../controller/cartController";
export const register = (app: express.Application) => {
  const ShippingRouter = express.Router();

  const controller = new ShippingController();
  //define route handler
  ShippingRouter.get("/all", controller.get);

  ShippingRouter.get("/:id", controller.getById);

  ShippingRouter.post("/", controller.create);

  ShippingRouter.put("/:id", controller.update);

  ShippingRouter.delete("/:id", controller.del);

  app.use("/api/v1/shipping", ShippingRouter); 
};
