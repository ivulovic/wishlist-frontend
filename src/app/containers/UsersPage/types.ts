import { Wishlist } from 'types/Wishlist';

/* --- STATE --- */
export interface UsersState {
  loading: boolean | null;
  error?: RepoError | null;
  wishlists: Wishlist[];
}

export interface RepoError {
  errorCount: number;
  message: string;
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = UsersState;
