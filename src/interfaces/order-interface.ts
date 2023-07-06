import { IProduct } from './product-interface';

export interface IOrderItem {
  readonly quantity: number;
  readonly createdAt: string;
  readonly product: IProduct;
}

export interface IOrder {
  readonly meta: { readonly count: number; readonly total: number }
  readonly data: Array<IOrderItem[]>;
}
