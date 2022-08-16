import { sidebarReducer } from './sidebarReducer';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { combineReducers, createStore, Store } from "redux";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebarPage: sidebarReducer
});

export type RootStateType = ReturnType<typeof reducers>;

//@ts-ignore
export const store: Store = createStore(reducers);
