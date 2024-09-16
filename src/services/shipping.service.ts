import { ApiError } from "../common/api.errror";
import { ErrorHandler } from "../common/error.handler";
import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { ShippingMapper } from "../mapper/shipping.mapper";
export class ShippingService {
  prisma: PrismaClient = null;
  constructor() {
    this.prisma = new PrismaClient();
  }
  getShipping = async (req: Request) => {
    const shippings = await this.prisma.shipping.findMany({});
    return shippings;
  };

  getShippingById = async (id: number) => {
    const shipping = await this.prisma.shipping.findUnique({
      where: {
        shipping_id: id,
      },
     
    });
    return ShippingMapper.toDto(shipping);
  };
  postShipping = async (req: Request) => {
    const shipping = await this.prisma.shipping.create({
      data: {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pin_code: parseInt(req.body.pin_code),
        orderId: parseInt(req.body.orderId),
      },
    });
    return ShippingMapper.toDto(shipping);
  };

  putShipping = async (req: Request) => {
    const shipping = await this.prisma.shipping.update({
      data: {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pin_code: req.body.pin_code?parseInt(req.body.pin_code):undefined,
      },
      where: {
        shipping_id: parseInt(req.params.id),
      },
    });
    return ShippingMapper.toDto(shipping);
  };

  delShipping = async (id: number) => {
    const shipping = await this.prisma.shipping.delete({
      where: {
        shipping_id: id,
      },
    });
    return ShippingMapper.toDto(shipping);
  };
}
