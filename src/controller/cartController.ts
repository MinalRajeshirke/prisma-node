import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { ResponseHandler } from "../common/response.handler";
// import { UserService } from "../services/user.service";
import { CartService } from "../services/cart.service";
import { Request } from "express";
import { Response } from "express";
import { CartValidator } from "./cart.valiation";

export class CartController {
  public service: CartService;
  constructor() {
    this.service = new CartService();
  }
  get = async (req: Request, res: Response) => {
    try {
      let carts = await this.service.getCart(req); // sending
      if (carts.length === 0) {
        ErrorHandler.throwNotFoundError("Carts Not Found");
      }
      const message = "Successfullly received Cart information";
      ResponseHandler.success(req, res, message, 200, carts);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id);
      const cart = await this.service.getCartById(id); // sending req paramete..r call getUser service method

      if (cart === null) {
        ErrorHandler.throwNotFoundError("no record");
      }
      const message = "cart info received successfully";
      ResponseHandler.success(req, res, message, 200, cart);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      await CartValidator.validateCreateRequest(req.body);
      let cart = await this.service.postCart(req);
      if (cart === null) {
        throw new ApiError("Unable to create Cart!", 400);
      }
      const message = "Cart created successfully";
      ResponseHandler.success(req, res, message, 200, cart);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id);
      const isPresent = await this.service.getCartById(id);
      if (isPresent === null) {
        ErrorHandler.throwNotFoundError(
          `cart with id ${req.params.id} not found`
        );
      }
      await CartValidator.validateUpdateRequest(req.body);
      const cart = await this.service.putCart(req);
      ResponseHandler.success(req, res, "Successfully updated ", 200, cart);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };

  del = async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id);
      const isPresent = await this.service.getCartById(id);
      if (isPresent === null) {
        ErrorHandler.throwNotFoundError(
          `Student with id ${req.params.id} not found`
        );
      }
      let response = await this.service.delCart(id);
      const message = "Cart record deleted successfully";
      ResponseHandler.success(req, res, message, 200, response);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };
}


