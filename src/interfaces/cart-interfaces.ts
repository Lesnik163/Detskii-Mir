import { IProduct } from './product-interface';

export interface ICartItem {
  quantity: number,
  createdAt?: string,
  product: Pick<IProduct, 'id' | 'title' | 'picture' | 'price'>
}
export interface ICart {
  items: Array<ICartItem>
}
export interface ICartUpdItem {
  id: string,
  quantity: number
}
export interface ICartUpd {
  data: Array<ICartUpdItem>
}
