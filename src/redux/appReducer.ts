import { getAuthUserData } from './authReducer';

type InitialStateType = {
    initialized: boolean
}

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState: InitialStateType = {
    initialized: false
};

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

const setInitializesSuccess = () => ({
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



