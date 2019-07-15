// import * as fromRouter from '@ngrx/router-store';
import { Params  , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';

import { ActionReducerMap , createFeatureSelector} from '@ngrx/store';
//import {  } from '@ngrx/store';

// import reducers of store slices
import * as fromLayout from './layout.reducer';
import * as fromApp from './app.reducer';


//export const getLayoutState = createFeatureSelector<fromLayout.LayoutState>('layout'); 


export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}
export interface State {
    // routerReducer : fromRouter.RouterReducerState<RouterStateUrl>
    // layout : fromLayout.LayoutState;
    app : fromApp.AppState;

}
export const reducers: ActionReducerMap<State> = {
    // routerReducer: fromRouter.routerReducer,
    // layout: fromLayout.reducer,
    app: fromApp.reducer

}

// export const getRouterState = createFeatureSelector<
// // fromRouter.RouterReducerState<RouterStateUrl>
// >('routerReducer'); 

// export class CustomSerializer
// implements fromRouter.RouterStateSerializer<RouterStateUrl> {
//     serialize( routerState: RouterStateSnapshot): RouterStateUrl {

//         const {url} = routerState;
//         const {queryParams} = routerState.root;

//         let state:ActivatedRouteSnapshot = routerState.root;
//         while(state.firstChild) {
//             state = state.firstChild;
//         }
//         const {params} = state;
      
//         return {url , queryParams , params};
//     }
// }


