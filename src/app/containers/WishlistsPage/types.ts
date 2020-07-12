import { Wishlist } from 'types/Wishlist';

/* --- STATE --- */
export interface WishlistsState {
  loading: boolean | null;
  error?: RepoError | null;
  wishlists: Wishlist[];
  tempWish: any;
}

export interface RepoError {
  errorCount: number;
  message: string;
}

export interface WishProps extends Wishlist {
  onRemoveWish?: (id?: string) => void;
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = WishlistsState;
