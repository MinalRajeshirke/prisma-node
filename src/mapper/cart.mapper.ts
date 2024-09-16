import { CartDto } from "../domain.types/cart.domain.types";

export class CartMapper {
  static toDto = (record: any): CartDto => {
    if (record === null) {
      return null;
    }
    const dto: CartDto = {
      cart_id: record.cart_id,
      quantity: record.quantity,
      product_name : record.product_name,
      userId: record.userId,
    };
    return dto;
  };
  static toArrayDto(record: any[]): CartDto[] {
    if (record === null) {
      return null;
    }
    const dtos: CartDto[] = [];
    record.forEach((element) => {
      dtos.push({
        cart_id: element.cart_id,
        quantity: element.quantity,
        product_name:element.product_name,
        userId: element.userId,
        
      });
    });
    return dtos;
  }
}
