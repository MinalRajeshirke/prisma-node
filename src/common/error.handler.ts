import { error } from "console";
import { ApiError } from "./api.errror";
// import Joi, { any } from "joi";
import Joi, { ValidationError } from "joi";

export class ErrorHandler{

static throwInputValidationError = (errorMessage :  string | string[])=> {
    var message = " Validation error has occured\n";
    if(errorMessage){
        message += Array.isArray(errorMessage) ? (errorMessage as string[]).join(' ') : errorMessage;
        message = message.split(' " ').join( '');

    }
    throw new ApiError(message, 422);

}

  static throwDuplicateUserError = (message : string) =>{
    throw new ApiError(message, 422);
  }
  static throwNotFoundError = (message: string) =>{
    throw new ApiError(message, 404);

  }

  static throwUnauthorizedUserError = (message : string) =>{
    throw new ApiError(message, 401);
  }
  

  //cart
  static throwDuplicateCartError = (message : string) =>{
    throw new ApiError(message, 422);
  }
  

  static throwUnauthorizedCartError = (message : string) =>{
    throw new ApiError(message, 401);
  }

  static handleValidationError = (error :any) =>{
    if(error.isJoi === true){
      // const errorMessages = error.details.map(x :Joi.ValidationErrorItem =>x.message);
      // ErrorHandler.throwInputValidationError (errorMessages);
      const errorMessages = error.details.map((x: ValidationError) => x.message);
      ErrorHandler.throwInputValidationError(errorMessages);


    }
    else{
      ErrorHandler.throwInputValidationError(error.message)
    }
  }
  

}