import { Action } from '@ngrx/store';

// SIDENAV ACTIONS
export const EXPAND_SIDENAV = '[app sidenav] Expand SideNav';
export const SHRINK_SIDENAV = '[app sidenav] Shrink SideNav';
export const SET_SECONDARY_MENU = '[app sidenav] set secondary menu';
export const SET_PRIMARY_MENU = '[app sidenav] Set Primary menu';
export const SET_SIDENAV_STATE = '[app sidenav] Set SideNav State';

//app sidenav
export class ExpandSideNav implements Action {
    readonly type = EXPAND_SIDENAV;
}
export class ShrinkSideNav implements Action {
    readonly type = SHRINK_SIDENAV;
}
export class SetSideNavState implements Action {
    readonly type = SET_SIDENAV_STATE;
    constructor(public payload: string) { }
}
export class SetSecondaryMenu implements Action {
    readonly type = SET_SECONDARY_MENU;
    constructor(public payload: any) { }
}
export class SetPrimaryMenu implements Action {
    readonly type = SET_PRIMARY_MENU;
    constructor(public payload: any) { }
}

// app state
export const SET_APP_PAGE_STATE = '[app] Update App Page State';
export const SET_CURRENT_PROJECT = '[app] Set Current Project';
export const SET_CURRENT_APPLICATION = '[app] Set Current Application';
// export const SET_PROJECTS_LIST = '[app] Set projects List';


// export class SetProjectsList implements Action {
//     readonly type = SET_PROJECTS_LIST;
//     constructor(public payload: any) { }
// }

export class SetAppPageState implements Action {
    readonly type = SET_APP_PAGE_STATE;
    constructor(public payload: string) { }
}

export class SetCurrentProject implements Action {
    readonly type = SET_CURRENT_PROJECT;
    constructor(public payload: any) { }
}

export class SetCurrentApplication implements Action {
    readonly type = SET_CURRENT_APPLICATION;
    constructor(public payload: any) { }
}

//export action type
export type AppActions = ExpandSideNav |
    ShrinkSideNav |
    SetSideNavState |
    SetSecondaryMenu |
    SetPrimaryMenu |
    SetAppPageState |
    SetCurrentProject |
    SetCurrentApplication;
