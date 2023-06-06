export interface IProduct {
    readonly id: string;
    readonly category: string;
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly picture: string;
    readonly rating: number;
  }

export interface IProductHttpResponse {
  readonly meta: { readonly count: number; readonly total: number };
  readonly data: Array<IProduct>;
}
