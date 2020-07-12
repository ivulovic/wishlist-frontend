import { Store } from './Store';

export interface Wishlist {
  url: string;
  title: string;
  image: string;
  oldPrice: string;
  currency: string;
  description: string;
  currentPrice: string;
  store: Store;
  // createdBy:
  // modifiedBy:
  createdAt?: Number;
  modifiedAt?: Number;
  _id?: string;
}
