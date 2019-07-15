import * as fromApp from "../actions/app.actions";


import { ActionReducerMap , createFeatureSelector} from '@ngrx/store';


export interface AppState {
    appPageState : string;
    sidenavExpanded : boolean;
    sidenavState : string;
    primarySidenavMenu: any;
    secondarySidenavMenu: any;
    currentProject:any;
    currentApplication:any;
}

export const initialState: AppState = {
    appPageState : '',
    sidenavExpanded : true,
    sidenavState : '',
    primarySidenavMenu: [],
    secondarySidenavMenu: [],
    currentProject:[],
    currentApplication:[]
};



export function reducer(
    state = initialState,
    action: fromApp.AppActions
) : AppState {

    switch(action.type) {
        case fromApp.EXPAND_SIDENAV: {
            return {
                ...state ,
                sidenavExpanded : true,
            };
        }
        case fromApp.SHRINK_SIDENAV: {
            return {
                ...state ,
                sidenavExpanded : false,
            };
        }
        case fromApp.SET_APP_PAGE_STATE: {
            const payload = action.payload;
            return {
                ...state,
                appPageState: payload,

            };
        }
        case fromApp.SET_SIDENAV_STATE: {
            const payload = action.payload;
            return {
                ...state,
                sidenavState: payload,

            };
        }
        case fromApp.SET_PRIMARY_MENU: {
            const payload = action.payload;
            return {
                ...state,
                primarySidenavMenu: payload,

            };
        }
        case fromApp.SET_SECONDARY_MENU: {
            const payload = action.payload;
            return {
                ...state,
                secondarySidenavMenu: payload,
            };
        }
        case fromApp.SET_CURRENT_PROJECT: {
            const payload = action.payload;
            return {
                ...state,
                currentProject: payload,
            };
        }
        case fromApp.SET_CURRENT_APPLICATION: {
            const payload = action.payload;
            return {
                ...state,
                currentApplication: payload,
            };
        }


    }
    return state;
}


// Export some levels of state using selectors


export const getAppPageState  = (state: AppState) => state.appPageState;
export const getCurrentProject = (state: AppState) => state.currentProject;
export const getCurrentApplication = (state: AppState) => state.currentApplication;
export const getSidenavExpanded = (state: AppState) => state.sidenavExpanded;
export const getSidenavState = (state: AppState) => state.sidenavState;
export const getPrimarySidenavMenu = (state: AppState) => state.primarySidenavMenu;
export const getSecondarySidenavMenu = (state: AppState) => state.secondarySidenavMenu;

export const getAppState = createFeatureSelector<AppState>('app');