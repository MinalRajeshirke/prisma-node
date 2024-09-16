import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { CartMapper } from "../mapper/cart.mapper";
export class CartService {
  prisma: PrismaClient = null;
  constructor() {
    this.prisma = new PrismaClient();
  }
  getCart = async (req: Request) => {
    const carts = await this.prisma.cart.findMany({});
    return carts;
  };

  getCartById = async (id: number) => {
    const cart = await this.prisma.cart.findUnique({
      where: {
        cart_id: id,
      },
    });
    return CartMapper.toDto(cart)
  };

  postCart = async (req: Request) => {
    const cart = await this.prisma.cart.create({
      data: {
        quantity: parseInt(req.body.quantity),
        product_name: req.body.product_name,
        userId: parseInt(req.body.userId),
      },
    });
    return CartMapper.toDto(cart)
  };
  // putCart = async (req: Request) => {
  //   const cart = await this.prisma.cart.update({
  //     data: {
  //       product_name: req.body.product_name,
  //       quantity: parseInt(req.body.quantity),
  //     },
  //     where:{
  //       cart_id: parseInt(req.params.id),
  //     },
  //   });

  //   return CartMapper.toDto(cart)
  // };
  putCart = async (req: Request) => {
    const cart = await this.prisma.cart.update({
      data: {
        product_name: req.body.product_name,
        quantity: req.body.quantity?parseInt(req.body.quantity):undefined
      },
      where: {
        cart_id: parseInt(req.params.id),
      },
    });
  
    return CartMapper.toDto(cart);
  };
  

  delCart = async (id: number) => {
    const cart = await this.prisma.cart.delete({
      where: {
        cart_id: id,
      },
    });
    return CartMapper.toDto(cart)
  };
}
