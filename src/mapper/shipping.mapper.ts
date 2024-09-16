import { ShippingDto } from "../domain.types/shipping.domain.types";

export class ShippingMapper {
  static toDto = (record: any): ShippingDto => {
    if (record === null) {
      return null;
    }
    const dto:ShippingDto = {
      shipping_id: record.shipping_id,
      address: record.address,
      city : record.city,
      state : record.state,
      pin_code : record.pin_code,
      
      orderId: record.orderId,
    };
    return dto;
  };
  static toArrayDto(record: any[]): ShippingDto[] {
    if (record === null) {
      return null;
    }
    const dtos: ShippingDto[] = [];
    record.forEach((element) => {
      dtos.push({
       shipping_id: element.sgipping_id,
       address: element.address,
        city : element.city,
        state:element.state,
        pin_code:element.pin_code,
        
        orderId: element.orderId,
        
      });
    });
    return dtos;
  }
}
