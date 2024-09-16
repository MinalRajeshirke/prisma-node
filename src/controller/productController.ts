
// import { ApiError } from "../common/api.errror";
// import { ErrorHandler } from "../common/error.handler";
// import { ResponseHandler } from "../common/response.handler";
// // import { UserService } from "../services/user.service";
// import { ProductService } from "../services/product.service";
// import { CartService } from "../services/cart.service";
// import { Request } from "express";
// import { Response } from "express";


// export class ProductController{
//    public service:ProductService;
//   constructor() {
//     this.service=new ProductService();
//   }
//       get = async (req : Request, res:Response) => {
//       try {
//           let products = await this.service.getProduct(req) // sending 
//           if(products.length ===0){
//           ErrorHandler.throwNotFoundError("No record");
//         }
//         const message = "Successfullly received Product information";
//         ResponseHandler.success(req,res, message, 200, products);
//       }catch(error : any) {
//               ResponseHandler.handleError(req,res,error)
          
//       }
//   };  

//   getById = async (req : Request, res:Response) => {
//     try {
//       const id :number = parseInt( req.params.id);
//       const product = await this.service.getProductById(id) // sending req paramete..r call getUser service method
      
//         if(product === null){
//           ErrorHandler.throwNotFoundError("no record");
         
//         }
//         const message = "cart info received successfully";
//         ResponseHandler.success(req,res, message, 200, product);
      
       
//         }catch(error:any) {
//           ResponseHandler.handleError(req,res,error)
        
//   }
//   };
  
//        create = async (req : Request, res:Response) => {
//       try {
//         let product = await this.service.postProduct(req)
//           if(product === null){
//             throw new ApiError("Unable to create Cart!",400);
//           }
//           const message = "product created successfully";
//           ResponseHandler.success(req,res, message, 200, product);
        
         
//           }catch(error:any) {
//             ResponseHandler.handleError(req,res,error)
          
//     }
//     };
     
//       update = async (req : Request, res:Response) => {
//       try {
//         const id :number = parseInt( req.params.id);
//         const isPresent = await this.service.getProductById(id);
//         if(isPresent ===null){
//           ErrorHandler.throwNotFoundError(
//             `cart with id ${req.params.id} not found`
//           );
//         }

//         const product = await this.service.putProduct(req);
//         ResponseHandler.success(req,res,"Successfully updated ",200,product);
//       }catch(error:any) {
            
//               ResponseHandler.handleError(req,res,error);
        
//     }
//     }
  
//       del = async (req : Request, res:Response) =>{
//       try {
//         const id :number = parseInt( req.params.id);
//         const isPresent = await this.service.getProductById(id);
//         if(isPresent ===null){
//           ErrorHandler.throwNotFoundError(
//             `Student with id ${req.params.id} not found`
//           );
//         }
//         let response = await this.service.delProduct(id);
//         const message = "Cart record deleted successfully"
//         ResponseHandler.success(req,res,message,200,response);
       
//           }catch(error:any) {
//             ResponseHandler.handleError(req,res,error);
           
        
//     }
    
    
//   }
// }




// // ths thing which are written in previous js file is write in a class