import { OrderDto } from "../domain.types/order.domain.types";

export class OrderMapper {
  static toDto = (record: any): OrderDto => {
    if (record === null) {
      return null;
    }
    const dto: OrderDto = {
      order_id: record.order_id,
      quantity: record.quantity,
      price : record.price,
      product_name : record.product_name,
      payment_method : record.payment_method,
      
      userId: record.userId,
    };
    return dto;
  };
  static toArrayDto(record: any[]): OrderDto[] {
    if (record === null) {
      return null;
    }
    const dtos: OrderDto[] = [];
    record.forEach((element) => {
      dtos.push({
        order_id: element.order_id,
        quantity: element.quantity,
        price : element.price,
        product_name:element.product_name,
        payment_method:element.payment_method,
        
        userId: element.userId,
        
      });
    });
    return dtos;
  }
}
