import { chatReducer } from './chatReducer';
import { appReducer } from './appReducer';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { sidebarReducer } from './sidebarReducer';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
});

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

