
import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { ResponseHandler } from "../common/response.handler";

import { OrderService } from "../services/order.service";
import { OrderValidator } from "./order.validation";
import { Request } from "express";
import { Response } from "express";


export class OrderController{
   public service:OrderService;
  constructor() {
    this.service=new OrderService();
  }
      get = async (req : Request, res:Response) => {
      try {
          let orders = await this.service.getOrder(req) // sending 
          if(orders.length === 0){
          ErrorHandler.throwNotFoundError("No record");
        }
        const message = "Successfullly received order information";
        ResponseHandler.success(req,res, message, 200, orders);
      }catch(error : any) {
              ResponseHandler.handleError(req,res,error)
          
      }
  };
  
  getById = async (req : Request, res:Response) => {
    try {
      const id :number = parseInt( req.params.id);
      const order = await this.service.getOrderById(id) // sending req paramete..r call getUser service method
      
        if(order === null){
          ErrorHandler.throwNotFoundError("no record");
         
        }
        const message = "Order info received successfully";
        ResponseHandler.success(req,res, message, 200,order );
      
       
        }catch(error:any) {
          ResponseHandler.handleError(req,res,error)
        
  }
  };
    
  
       create = async (req : Request, res:Response) => {
      try {
        await OrderValidator.validateCreateRequest(req.body);
        let order = await this.service.postOrder(req)
          if(order === null){
            throw new ApiError("Unable to create Order!",400);
          }
          const message = "Order created successfully";
          ResponseHandler.success(req,res, message, 200, order);
        
         
          }catch(error:any) {
            ResponseHandler.handleError(req,res,error)
          
    }
    };
     
      update = async (req : Request, res:Response) => {
      try {
        const id :number = parseInt( req.params.id);
        const isPresent = await this.service.getOrderById(id);
        if(isPresent ===null){
          ErrorHandler.throwNotFoundError(
            `Order with id ${req.params.id} not found`
          );
        }
        await OrderValidator.validateUpdateRequest(req.body);
        const order = await this.service.putOrder(req);
        ResponseHandler.success(req,res,"Successfully updated ",200,order);
      }catch(error:any) {
            
              ResponseHandler.handleError(req,res,error);
        
    }
    }
  
      del = async (req : Request, res:Response) =>{
      try {
        const id :number = parseInt( req.params.id);
        const isPresent = await this.service.getOrderById(id);
        if(isPresent ===null){
          ErrorHandler.throwNotFoundError(
            `Order with id ${req.params.id} not found`
          );
        }
        let response = await this.service.delOrder(id);
        const message = "Order record deleted successfully"
        ResponseHandler.success(req,res,message,200,response);
       
          }catch(error:any) {
            ResponseHandler.handleError(req,res,error);
           
        
    }
    
    
  }
}




