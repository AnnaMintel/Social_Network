import { RootStateType } from './redux-store';
import { updateObjectInArray } from './../utils/objectHelpers/objectHelpers';
import { usersAPI } from "../api/api"
import { UserPageType } from './types/types';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';


// types
type UserLocation = {
    city: string,
    country: string
}

export type InitialStateType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    users: Array<UserPageType>
    followingInProgress: Array<number>
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS ';


const initialState: InitialStateType = {
    users: [] as Array<UserPageType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
};

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
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
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state;
    }
}

// types for AC
// export type FollowSuccessActionType = {
//     type: typeof FOLLOW
//     userID: number
// }
// export type UnfollowSuccessActionType = {
//     type: typeof UNFOLLOW
//     userID: number
// }
// export type SetUserProfile = {
//     type: typeof SET_USERS
//     users: Array<UserPageType>
// }
// export type SetCurrentPageType = {
//     type: typeof SET_CURRENT_PAGE
//     currentPage: number
// }
// export type SetUsersTotalCountType = {
//     type: typeof SET_TOTAL_USERS_COUNT
//     count: number
// }
// export type ToggleIsFetchingType = {
//     type: typeof TOGGLE_IS_FETCHING
//     isFetching: boolean
// }
// export type ToggleFollowingProgressType = {
//     type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
//     isFetching: boolean
//     userID: number
// }
// type ActionType = FollowSuccessActionType | UnfollowSuccessActionType
//     | SetUserProfile | SetCurrentPageType | SetUsersTotalCountType
//     | ToggleIsFetchingType | ToggleFollowingProgressType

export const followSuccess = (userID: number) =>
    ({ type: FOLLOW, userID })
export const unfollowSuccess = (userID: number) =>
    ({ type: UNFOLLOW, userID })
export const setUsers = (users: Array<UserPageType>) =>
    ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number) =>
    ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount: number) =>
    ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching: boolean) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, userID: number) =>
    ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })

// thunk type
type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionType>

//thunk
export const getUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let response = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount));
}

export const followUnfollow = async (dispatch: Dispatch<ActionType>, userId: number,
    apiMethod: any, actionCreator: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
}