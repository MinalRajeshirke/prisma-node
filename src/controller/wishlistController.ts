
import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { ResponseHandler } from "../common/response.handler";
import { WishlistService } from "../services/wishlist.service";
import { Request } from "express";
import { Response } from "express";
import { WishlistValidator } from "./wishlist.validation";


export class WishlistController{
   public service:WishlistService;
  constructor() {
    this.service=new WishlistService();
  }
      get = async (req : Request, res:Response) => {
      try {
          let wishlists = await this.service.getWishlist(req) // sending 
          if(wishlists.length === 0){
          ErrorHandler.throwNotFoundError(" No record ");
        }
        const message = "Successfullly received wishlist information";
        ResponseHandler.success(req,res, message, 200, wishlists);
      }catch(error : any) {
              ResponseHandler.handleError(req,res,error)
          
      }
  };  

  getById = async (req : Request, res:Response) => {
    try {
      const id :number = parseInt( req.params.id);
      const wishlist = await this.service.getWishlistById(id) // sending req paramete..r call getUser service method
      
        if(wishlist === null){
          ErrorHandler.throwNotFoundError("no record");
         
        }
        const message = "wishlist info received successfully";
        ResponseHandler.success(req,res, message, 200, wishlist);
      
       
        }catch(error:any) {
          ResponseHandler.handleError(req,res,error)
        
  }
  };
  
       create = async (req : Request, res:Response) => {
      try {
        await WishlistValidator.validateCreateRequest(req.body);
        let wishlist = await this.service.postWishlist(req)
          if(wishlist === null){
            throw new ApiError("Unable to create wishlist!",400);
          }
          const message = "Wishlist created successfully";
          ResponseHandler.success(req,res, message, 200, wishlist);
        
         
          }catch(error:any) {
            ResponseHandler.handleError(req,res,error)
          
    }
    };
     
      update = async (req : Request, res:Response) => {
      try {
        const id :number = parseInt( req.params.id);
        const isPresent = await this.service.getWishlistById(id);
        if(isPresent ===null){
          ErrorHandler.throwNotFoundError(
            `wishlist with id ${req.params.id} not found`
          );
        }
        await WishlistValidator.validateUpdateRequest(req.body);
        const wishlist = await this.service.putWishlist(req);
        ResponseHandler.success(req,res,"Successfully updated ",200,wishlist);
      }catch(error:any) {
            
              ResponseHandler.handleError(req,res,error);
        
    }
    }
  
      del = async (req : Request, res:Response) =>{
      try {
        const id :number = parseInt( req.params.id);
        const isPresent = await this.service.getWishlistById(id);
        if(isPresent ===null){
          ErrorHandler.throwNotFoundError(
            `wishlist with id ${req.params.id} not found`
          );
        }
        let response = await this.service.delWishlist(id);
        const message = "wishlist record deleted successfully"
        ResponseHandler.success(req,res,message,200,response);
       
          }catch(error:any) {
            ResponseHandler.handleError(req,res,error);
           
        
    }
    
    
  }
}




// ths thing which are written in previous js file is write in a class