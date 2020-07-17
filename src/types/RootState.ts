import { AdministratorState } from 'app/containers/AdministratorPage/types';
import { ThemeState } from 'styles/theme/types';
import { WishlistsState } from 'app/containers/WishlistsPage/types';
import { UsersState } from 'app/containers/UsersPage/types';
import { StoresState } from 'app/containers/StoresPage/types';
import { GlobalState } from 'app/providers/GlobalProvider/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  administrator?: AdministratorState;
  wishlists?: WishlistsState;
  users?: UsersState;
  stores?: StoresState;
  global?: GlobalState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
