import { WishlistDto } from "../domain.types/wishlist.domain.types";

export class WishlistMapper {
  static toDto = (record: any): WishlistDto => {
    if (record === null) {
      return null;
    }
    const dto: WishlistDto = {
      wishlist_id: record.wishlist_id,
      name: record.name,
      product_name : record.product_name,
      userId: record.userId,
    };
    return dto;
  };
  static toArrayDto(record: any[]): WishlistDto[] {
    if (record === null) {
      return null;
    }
    const dtos: WishlistDto[] = [];
    record.forEach((element) => {
      dtos.push({
        wishlist_id: element.wishlist_id,
        name: element.name,
        product_name:element.product_name,
        userId: element.userId,
        
      });
    });
    return dtos;
  }
}
