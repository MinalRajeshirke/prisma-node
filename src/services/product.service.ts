
// import { ApiError } from "../common/api.errror";
// import { ErrorHandler } from "../common/error.handler";
// import { Request } from "express";
// import { PrismaClient } from "@prisma/client";
// export class ProductService{
//     prisma:PrismaClient=null
//     constructor() {
//         this.prisma=new PrismaClient()
//     }
//          getProduct = async(req : Request)=>{
            
//             const products = await this.prisma.product.findMany({
                

//             })
//             return products;

//         };
        
//          getProductById= async(id : number)=>{
//             const product = await this.prisma.product.findUnique({
//                 where : {
//                     prod_id :id,

//                 },
//             });
//             return product;
//         }
        
//         postProduct  = async(req : Request)=>{
//             const product = await this.prisma.product.create({
//              data:{
//                  name : req.body.name,
//                  des : req.body.des,
//                  price :parseInt( req.body.price)
                 
 
//              },
//             })
//             return product
//          }
//         putProduct = async(req : Request)=>{
//             const product = await this.prisma.product.update({
//                 data:{
//                     name : req.body.name,
//                     des : req.body.des,
//                     price : parseInt(req.body.price),  
                    
//                 },
//                 where : {
//                     prod_id : parseInt(req.body.prod_id) 
//                 }
//                })

//                return product
            
//         }
        
//          delProduct = async(id : number)=>{
//             const product = await this.prisma.product.delete({
//                 where:{
//                     prod_id : id,
//                 }
//             })
//             return product;
        
        
//     }
// }
