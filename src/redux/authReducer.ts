import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/api";

type InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: boolean
}

export const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

const setUserDataAC = (userId: null, email: null, login: null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth }
})

//thunk
export const getAuthUserData = () => async (dispatch: any) => {
    let response = await headerAPI.getHeader();
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setUserDataAC(id, email, login, true));
    }
};

// thunk for login
export const login = (email: any, password: any, rememberMe: any) => async (dispatch: any) => {
    let response = await headerAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.messages.length > 0 ? response.messages[0]
            : 'Data is incorrect';
        dispatch(stopSubmit('login', { _error: message }));
    }
};

// thunk for logout
export const logout = () => async (dispatch: any) => {
    let response = await headerAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false));
    }
}


