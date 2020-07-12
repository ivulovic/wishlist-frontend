export interface Store {
  name: string;
  logo: string;
  origin: string;
  titleSelector: string;
  imageSelector: string;
  oldPriceSelector: string;
  currencySelector: string;
  currentPriceSelector: string;
  _id?: string;
  createdAt?: Number;
  modifiedAt?: Number;
}
