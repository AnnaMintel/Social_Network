import { stopSubmit } from "redux-form";
import { headerAPI, ResultCodeEnum } from "../api/api";


// types
type SetUserDataActionDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetUserDataACType = {
    type: typeof SET_USER_DATA,
    data: SetUserDataActionDataType
}
// type GetCaptchaUrlType = {
//     type: typeof GET_CAPTCHA_URL_SUCCESS,
//     payload: { captchaUrl: string}
// }

export type InitialStateType = typeof initialState;

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean
    // captchaUrl: null as string | null
};

export const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

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

const setUserDataAC = (userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean): SetUserDataACType => ({
        type: SET_USER_DATA,
        data: { userId, email, login, isAuth }
    })

// export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlType => {
//     type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
// }


//thunk
export const getAuthUserData = () => async (dispatch: any) => {
    let meData = await headerAPI.getHeader();
    if (meData.resultCode === ResultCodeEnum.Success) {
        let { id, email, login } = meData.data;
        dispatch(setUserDataAC(id, email, login, true));
    }
};

// thunk for login
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let loginData = await headerAPI.login(email, password, rememberMe);
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        let message = loginData.messages.length > 0 ? loginData.messages[0]
            : 'Data is incorrect';
        dispatch(stopSubmit('login', { _error: message }));
    }
};

// thunk for logout
export const logout = () => async (dispatch: any) => {
    let logoutData = await headerAPI.logout()
    if (logoutData.resultCode === ResultCodeEnum.Success) {
        dispatch(setUserDataAC(null, null, null, false));
    }
}


