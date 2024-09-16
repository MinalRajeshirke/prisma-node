import Joi from "joi";
import { ErrorHandler } from "../common/error.handler";
export class WishlistValidator {
  static async validateCreateRequest(requestBody: any) {
    try {
      const schema = Joi.object({
        name: Joi.string().min(1).max(20).required(),
        product_name: Joi.string().min(3).max(50).required(),
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
        name: Joi.string().min(1).max(20),

        product_name: Joi.string().min(3).max(50),
      });

      return await schema.validateAsync(requestBody);
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  }
}
