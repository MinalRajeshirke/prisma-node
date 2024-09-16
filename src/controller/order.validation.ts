import Joi from "joi";
import { ErrorHandler } from "../common/error.handler";
export class OrderValidator {
  static async validateCreateRequest(requestBody: any) {
    try {
      const schema = Joi.object({

        quantity : Joi.number().integer().min(1).max(30).required(),
        product_name: Joi.string() .min(3).max(60).required(),
        payment_method : Joi.string().min(3).max(30).required(),
        price : Joi.number().min(1).required(),
        
        userId: Joi.number().integer().min(1).required(),
      }); 

    return await schema.validateAsync(requestBody);
    } catch (error) {
    ErrorHandler.handleValidationError(error);
    }
  }

  static async validateUpdateRequest(requestBody: any) {
    try {
      const schema = Joi.object({
        quantity : Joi.number().integer().min(1).max(30),
        
        product_name: Joi.string()
        
        .min(3)
        .max(60),
        price : Joi.number().min(1),
        payment_method : Joi.string()
        .min(3)
        .max(30)
        //cart_id : Joi.number().integer().min(1).required()
        
      });

      return await schema.validateAsync(requestBody);
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  }
}