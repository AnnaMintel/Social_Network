import { getAuthUserData } from './authReducer';

// types
export type InitialStateType = {
    initialized: boolean
}
type SettingsInitializesSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}


const initialState: InitialStateType = {
    initialized: false
};

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

const setInitializesSuccess = ():SettingsInitializesSuccessType => ({
    type: INITIALIZED_SUCCESS
})


//thunk
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializesSuccess());
        })
}



