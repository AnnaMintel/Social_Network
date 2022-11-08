import { RootStateType } from "./redux-store";
import { createSelector } from 'reselect';


export const getusersSelector = (state: RootStateType) => {
    return state.usersPage.users;
}

export const getusers= createSelector(getusersSelector, (users: any) => {
        return users.filter((u: any) => true)
    })

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage;
}

export const getisFetching = (state: RootStateType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress;
}

export const getIsAuth = (state: RootStateType) => {
    return state.auth.isAuth;
}
