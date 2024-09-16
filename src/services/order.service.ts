import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { OrderMapper } from "../mapper/order.mapper";
// import { parseISO } from 'date-fns';

export class OrderService {
  prisma: PrismaClient = null;
  constructor() {
    this.prisma = new PrismaClient();
  }

  getOrder = async (req: Request) => {
    const orders = await this.prisma.order.findMany({
      include:{
        Shipping:true,
      }
    });

    return orders;
  };
  getOrderById = async (id: number) => {
    const order = await this.prisma.order.findUnique({
      where: {
        order_id: id,
      },

     
    });
    return OrderMapper.toDto(order);
  };

  postOrder = async (req: Request) => {
    const order = await this.prisma.order.create({
      data :{
        quantity:parseInt(req.body.quantity),
        price : parseInt(req.body.price),
        product_name : req.body.product_name,
        payment_method: req.body.payment_method,
        
        userId : parseInt(req.body.userId)
      },
     
    });
    return OrderMapper.toDto(order)
  };

  putOrder = async (req: Request) => {
    const order = await this.prisma.order.update({
      data: {
      
        quantity:req.body.quantity?parseInt(req.body.quantity):undefined,
        price: req.body.price?parseInt(req.body.price):undefined,
        product_name : req.body.product_name,
        payment_method: req.body.payment_method,
      },
      where: {
        order_id: parseInt(req.params.id),
      },
    });

    return OrderMapper.toDto(order)
  };

  delOrder = async (id: number) => {
    const order = await this.prisma.order.delete({
      where: {
        order_id: id,
      },
    });
    return OrderMapper.toDto(order)
  };
}
