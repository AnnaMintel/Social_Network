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
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


const initialState: InitialStateType = {
    users: [],
    //@ts-ignore
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                //@ts-ignore
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                //@ts-ignore
                totalUsersCount: action.count
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID: number) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID: number) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users: Array<UserPageType>) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: any) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUsersCount: any) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
