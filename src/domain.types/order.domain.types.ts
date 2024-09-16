export interface OrderDto {
  order_id?:number;
  quantity?: number;
  price?: number;
  product_name?: string;
  payment_method?: string;
  userId?: number;
}
