/* --- STATE --- */
export interface GlobalState {
  loading: boolean | null;
  error?: RepoError | null;
  isDrawerOpen: boolean;
}

export interface RepoError {
  errorCount: number;
  message: string;
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = GlobalState;
