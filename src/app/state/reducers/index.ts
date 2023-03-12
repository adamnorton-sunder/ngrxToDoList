import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from '../app.state';
import * as todoReducer from './todo.reducer';

// export const reducers: ActionReducerMap<AppState, any> = {
//   // todos: todoReducer.reducer,
// };

//   export const metaReducers: MetaReducer<AppState>[] = !environment.production
//     ? [hydrationMetaReducer]
//     : [hydrationMetaReducer];