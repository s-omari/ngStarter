import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

// import reducers
import * as fromLayout from '../modules/anappro/shared-anappro/store/reducers/layout.reducer';
import * as fromApp from '../modules/anappro/shared-anappro/store/reducers/app.reducer';

// app state interface
export interface State {
  layout: fromLayout.LayoutState;
  app : fromApp.AppState;

}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  app: fromApp.reducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


