import Joi from "joi";
import { ErrorHandler } from "../common/error.handler";
export class ShippingValidator {
  static async validateCreateRequest(requestBody: any) {
    try {
      const schema = Joi.object({
         address: Joi.string()
        .min(5)
        .max(60)
        .required(),
        city: Joi.string()
        .min(3)
        .max(15).pattern(/^[A-Za-z\s]+$/)
        .required(),
        state : Joi.string()
        .min(3)
        .max(15).pattern(/^[A-Za-z\s]+$/)
        .required(),

        pin_code : Joi.number().integer().min(100000).max(999999).required(),
        
        
        
        orderId: Joi.number().integer().min(1).required(),
      }); 

    return await schema.validateAsync(requestBody);
    } catch (error) {
    ErrorHandler.handleValidationError(error);
    }
  }

  static async validateUpdateRequest(requestBody: any) {
    try {
      const schema = Joi.object({
        address: Joi.string()
        .min(5)
        .max(60),
        city: Joi.string()
        .min(3)
        .max(25).pattern(/^[A-Za-z\s]+$/),
        state : Joi.string()
        .min(3)
        .max(15).pattern(/^[A-Za-z\s]+$/),

        pin_code : Joi.number().integer().min(100000).max(999999),
        
       
        
      });

      return await schema.validateAsync(requestBody);
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  }
}