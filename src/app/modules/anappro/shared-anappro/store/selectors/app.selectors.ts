import { createSelector} from '@ngrx/store';

import * as fromApp from '../reducers/app.reducer';


export const getAppState = createSelector(
    fromApp.getAppState,
    (state: fromApp.AppState) => state
);

export const getAppPageState = createSelector(
    getAppState ,
    fromApp.getAppPageState
);

export const getCurrentProject = createSelector(
    getAppState , 
    fromApp.getCurrentProject
);

export const getCurrentApplication = createSelector(
    getAppState , 
    fromApp.getCurrentApplication
);

export const getSidenavExpanded = createSelector(
    getAppState , 
    fromApp.getSidenavExpanded
);
export const getSidenavState = createSelector(
    getAppState , 
    fromApp.getSidenavState
);

export const getPrimarySidenavMenu = createSelector(
    getAppState , 
    fromApp.getPrimarySidenavMenu
);

export const getSecondarySidenavMenu = createSelector(
    getAppState , 
    fromApp.getSecondarySidenavMenu
);
