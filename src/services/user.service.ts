// import express from "express";
import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { UserMapper } from "../mapper/user.mapper";

export class UserService {
  prisma: PrismaClient = null;
  constructor() {
    this.prisma = new PrismaClient();
  }
  getUser = async (req: Request) => {
    const users = await this.prisma.user.findMany({
      include: {
        Cart: true,
        Order : true,
        Wishlist: true,
        
      },
    });
    return users;
  };
  getUserById = async (id: number) => {
    const user = await this.prisma.user.findUnique({
      where: {
        user_id: id,
      },
    });
    return UserMapper.toDto(user);
  };

  postUser = async (req: Request) => {
    const user = await this.prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        
      },
    });
    return UserMapper.toDto(user);
  };

  putUser = async (req: Request) => {
    const user = await this.prisma.user.update({
      data: {
        name: req.body.name,
        email: req.body.email,
      },
      //without the id: in where it will update all
      where: {
        user_id: parseInt(req.params.id),
      },
    });
    return UserMapper.toDto(user);
  };

  delUser = async (id: number) => {
    const user = await this.prisma.user.delete({
      where: {
        user_id: id,
      },
    });
    return UserMapper.toDto(user);
  };
}

// export const login = async(req)=>{
//     return "user-controller-service got login req"
// }
