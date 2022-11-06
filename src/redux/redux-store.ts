import { appReducer } from './appReducer';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { sidebarReducer } from './sidebarReducer';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
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

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// export const store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));
