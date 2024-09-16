
import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { ResponseHandler } from "../common/response.handler";
import { ShippingService } from "../services/shipping.service";
import { ShippingValidator } from "./shipping.validation";
//import { CartService } from "../services/cart.service";
import { Request } from "express";
import { Response } from "express";


export class ShippingController{
   public service:ShippingService;
  constructor() {
    this.service=new ShippingService();
  }
      get = async (req : Request, res:Response) => {
      try {
          let shippings = await this.service.getShipping(req) // sending 
          if(shippings.length === 0 ){
          ErrorHandler.throwNotFoundError("No record ");
        }
        const message = "Successfullly received Shipping information";
        ResponseHandler.success(req,res, message, 200, shippings);
      }catch(error : any) {
              ResponseHandler.handleError(req,res,error)
          
      }
  }; 
  
  getById = async (req : Request, res:Response) => {
    try {
      const id :number = parseInt( req.params.id);
      const shipping = await this.service.getShippingById(id) // sending req paramete..r call getUser service method
      
        if(shipping === null){
          ErrorHandler.throwNotFoundError("no record");
         
        }
        const message = "Shipping info received successfully";
        ResponseHandler.success(req,res, message, 200,shipping );
      
       
        }catch(error:any) {
          ResponseHandler.handleError(req,res,error)
        
  }
  };
  
       create = async (req : Request, res:Response) => {
      try {
        await ShippingValidator.validateCreateRequest(req.body);
        let shipping = await this.service.postShipping(req)
          if(shipping === null){
            throw new ApiError("Unable to create shipping!",400);
          }
          const message = "shipping created successfully";
          ResponseHandler.success(req,res, message, 200, shipping);
        
         
          }catch(error:any) {
            ResponseHandler.handleError(req,res,error)
          
    }
    };
     
      update = async (req : Request, res:Response) => {
      try {
        const id :number = parseInt( req.params.id);
        const isPresent = await this.service.getShippingById(id);
        if(isPresent ===null){
          ErrorHandler.throwNotFoundError(
            `Shipping with id ${req.params.id} not found`
          );
        }
        await ShippingValidator.validateUpdateRequest(req.body);

        const shipping = await this.service.putShipping(req);
        ResponseHandler.success(req,res,"Successfully updated ",200,shipping);
      }catch(error:any) {
            
              ResponseHandler.handleError(req,res,error);
        
    }
    }
  
      del = async (req : Request, res:Response) =>{
      try {
        const id :number = parseInt( req.params.id);
        const isPresent = await this.service.getShippingById(id);
        if(isPresent ===null){
          ErrorHandler.throwNotFoundError(
            `Shipping with id ${req.params.id} not found`
          );
        }
        let response = await this.service.delShipping(id);
        const message = "Shipping record deleted successfully"
        ResponseHandler.success(req,res,message,200,response);
       
          }catch(error:any) {
            ResponseHandler.handleError(req,res,error);
           
        
    }
    
    
  }
}




// ths thing which are written in previous js file is write in a class