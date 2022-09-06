import { usersReducer } from './usersReducer';
import { sidebarReducer } from './sidebarReducer';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { combineReducers, createStore, Store } from "redux";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
});

export type RootStateType = ReturnType<typeof reducers>;

export const store: Store = createStore(reducers);
