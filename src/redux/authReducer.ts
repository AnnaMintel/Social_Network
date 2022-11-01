import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/api";

type InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: boolean
}

export const SET_USER_DATA = 'SET_USER_DATA';

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
export const getAuthUserData = () => {
    return (dispatch: any) => {
        headerAPI.getHeader().then((data: any) => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setUserDataAC(id, email, login, true));
            }
        });
    }
}

// thunk for login
export const login = (email: any, password: any, rememberMe: any) => (dispatch: any) => {
    headerAPI.login(email, password, rememberMe)
        .then((response: any) => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.messages.length > 0 ? response.messages[0]
                    : 'Data is incorrect';
                dispatch(stopSubmit('login', { _error: message }));
            }
        });
}

// thunk for logout
export const logout = () => (dispatch: any) => {
    headerAPI.logout()
        .then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false));
            }
        });
}


