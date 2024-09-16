// import express from "express";
import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { ResponseHandler } from "../common/response.handler";
import { UserService } from "../services/user.service";
import { Request } from "express";
import { Response } from "express";
import { UserValidator } from "./user.validation";

// import { getUser, postUser, putUser, delUser,} from "../services/user.service.js";   ---this methods are merge in class so they are no longer methods so we have to create instacne of userservice class

export class UserController {
  //created memeber var and initailized
  public service: UserService;
  constructor() {
    this.service = new UserService();
  }
  get = async (req: Request, res: Response) => {
    try {
      // user = array of user
      let users = await this.service.getUser(req); // sending req paramete..r call getUser
      // service method

      if (users.length === 0) {
        ErrorHandler.throwNotFoundError("no record");
      }
      const message = "Successfullly received user information";
      ResponseHandler.success(req, res, message, 200, users);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };
  getById = async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id);
      const user = await this.service.getUserById(id); // sending req paramete..r call getUser service method

      if (user === null) {
        ErrorHandler.throwNotFoundError("no record");
      }
      const message = "User info received successfully";
      ResponseHandler.success(req, res, message, 200, user);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      await UserValidator.validateCreateRequest(req.body);
      let user = await this.service.postUser(req); // sending req paramete..r call getUser service method
      if (user === null) {
        throw new ApiError("Unable to create user!", 400);
      }
      const message = "User created successfully";
      ResponseHandler.success(req, res, message, 200, user);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id);
      const isPresent = await this.service.getUserById(id);
      if (isPresent === null) {
        ErrorHandler.throwNotFoundError(
          `Student with id ${req.params.id} not found`
        );
      }

      await UserValidator.validateUpdateRequest(req.body);
      const user = await this.service.putUser(req);
      ResponseHandler.success(req, res, "Successfully updated ", 200, user); // here write user instead of null coz it will reflect update in database also not only in postman
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };

  del = async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id);
      const isPresent = await this.service.getUserById(id);
      if (isPresent === null) {
        ErrorHandler.throwNotFoundError(
          `Student with id ${req.params.id} not found`
        );
      }
      let response = await this.service.delUser(id);
      const message = "User record deleted successfully";
      ResponseHandler.success(req, res, message, 200, response);
    } catch (error: any) {
      ResponseHandler.handleError(req, res, error);
    }
  };
}

//   export const login = async (req, res) => {
//     try {
//         const response = await login(req) // sending req paramete..r call getUser service method
//         res.send({
//             Message : response,
//             Url: req.baseUrl,
//             Method : req.method
//           })
//           }catch(error) {
//             res.send({
//                 Message : "unable to login",
//                 Url: req.baseUrl,
//                 Method : req.method
//               })

//     }
// };

// ths thing which are written in previous js file is write in a class
