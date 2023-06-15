import { IProduct } from './product-interface';

export interface ICartItem {
  product: Pick<IProduct, 'id' | 'title' | 'picture' | 'price'>
  quantity: number,
  createdAt?: string,
}
export interface ICart {
  items: Array<ICartItem>
}
