import { Console } from "console";
import { PostType } from "../components/Profile/MyPosts/Post/Post";

type UserLocation = {
    city: string,
    country: string
}

export type UserPageType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: PhotoType,
    status: null | string,
    followed: boolean
}

type PhotoType = {
    small: null | string | undefined,
    large: null | string | undefined
}

export type InitialStateType = {
    users: Array<UserPageType>
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

const initialState: InitialStateType = {
    users: []
};

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID: number) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID: number) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users: Array<UserPageType>) => ({ type: SET_USERS, users })
