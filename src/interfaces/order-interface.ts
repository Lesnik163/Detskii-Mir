import { IProduct } from './product-interface';

export interface IOrderItem {
  readonly product: IProduct;
  readonly quantity: number;
}

export interface IOrder {
  readonly number: string;
  readonly products: IOrderItem[];
  readonly createdAt: string;
}
