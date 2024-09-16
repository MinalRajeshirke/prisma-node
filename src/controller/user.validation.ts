import Joi from "joi";
import { ErrorHandler } from "../common/error.handler";
export class UserValidator {
  static async validateCreateRequest(requestBody: any) {
    try {
      const schema = Joi.object({
        name: Joi.string()
          .pattern(/^[A-Za-z\s]+$/)
          .min(2)
          .max(15)
          .required(),
        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
          
        }).required(),
      });

      return await schema.validateAsync(requestBody);
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  }

  static async validateUpdateRequest(requestBody: any) {
    try {
      const schema = Joi.object({
        name: Joi.string()
          .pattern(/^[A-Za-z\s]+$/)
          .min(2)
          .max(15), //required is not compulsory
        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        }),
      });

      return await schema.validateAsync(requestBody);
    } catch (error) {
      ErrorHandler.handleValidationError(error);
    }
  }
}
