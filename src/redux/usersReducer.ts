import { Console } from "console";
import { PostType } from "../components/Profile/MyPosts/Post/Post";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type AddPostActionActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type ActionType = AddPostActionActionType | UpdateNewPostTextActionType


export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: 1, photoUrl: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg',
            followed: false, fullName: 'Hanna', status: 'I am a teacher',
            location: { city: 'Minsk', country: 'Belarus' }
        },
        {
            id: 2, photoUrl: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg',
            followed: true, fullName: 'Max', status: 'I am a student',
            location: { city: 'Warshawa', country: 'Poland' }
        },
        {
            id: 3, photoUrl: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg',
            followed: false, fullName: 'Alex', status: 'I am a student',
            location: { city: 'Limossol', country: 'Cyprys' }
        }
    ]
}

export const usersReducer = (state: any = initialState, action: any) => {

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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID: number) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID: number) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users: any) => ({ type: SET_USERS, users })
