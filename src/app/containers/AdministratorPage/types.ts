import { Store } from 'types/Store';

/* --- STATE --- */
export interface AdministratorState {
  loading: boolean;
  error?: RepoError | null;
  stores: Store[];
}

export interface RepoError {
  errorCount: number;
  message: string;
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = AdministratorState;
