import { headerAPI } from "../api/api";

type InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: boolean
    // isFetching: boolean
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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

const setUserDataAC = (userId: null, email: null, login: null) => ({
    type: SET_USER_DATA,
    data: { userId, email, login }
})

//thunk
export const getAuthUserData = () => {
    return (dispatch: any) => {
        headerAPI.getHeader().then((data: any) => {
            if (data.resultCode === 0) {
              let { id, email, login } = data.data;
              dispatch(setUserDataAC(id, email, login));
            }
          });
    }
}
