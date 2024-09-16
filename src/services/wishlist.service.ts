import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { WishlistMapper } from "../mapper/wishlist.mapper";

export class WishlistService {
  prisma: PrismaClient = null;
  constructor() {
    this.prisma = new PrismaClient();
  }
  getWishlist = async (req: Request) => {
    const wishlists = await this.prisma.wishlist.findMany({});

    return wishlists;
  };

  getWishlistById = async (id: number) => {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: {
        wishlist_id: id,
      },
    });
    return WishlistMapper.toDto(wishlist);
  };

  postWishlist = async (req: Request) => {
    const wishlist = await this.prisma.wishlist.create({
      data: {
        name: req.body.name,
        product_name: req.body.product_name,
        userId: parseInt(req.body.userId),
      },
    });
    return WishlistMapper.toDto(wishlist);
  };

  putWishlist = async (req: Request) => {
    const wishlist = await this.prisma.wishlist.update({
      data: {
        name: req.body.name,
        product_name: req.body.product_name,
      },
      where: {
        wishlist_id: parseInt(req.params.id),
      },
    });

    return WishlistMapper.toDto(wishlist);
  };

  delWishlist = async (id: number) => {
    const wishlist = await this.prisma.wishlist.delete({
      where: {
        wishlist_id: id,
      },
    });
    return WishlistMapper.toDto(wishlist);
  };
}
