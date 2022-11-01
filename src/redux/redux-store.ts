import { appReducer } from './appReducer';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { sidebarReducer } from './sidebarReducer';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export type RootStateType = ReturnType<typeof reducers>;

export const store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));
