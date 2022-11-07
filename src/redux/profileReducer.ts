import { Console, profile } from "console";
import { idText } from "typescript";
import { profileAPI } from "../api/api";
import { PostType } from "../components/Profile/MyPosts/Post/Post";

export type AddPostActionActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SetUserProfile = {
    type: 'SET_USER_PROFILE'
    profile: any
}
export type SetUserStatusType = {
    type: 'SET_USER_STATUS'
    status: string
}
export type DeletePostActionCreatorType = {
    type: 'DELETE_AC_POST'
    postId: any
}
export type SavePhotoActionCreatorType = {
    type: 'SAVE_PHOTO'
    photos: any
}

type ActionType = AddPostActionActionType | UpdateNewPostTextActionType
    | SetUserProfile | SetUserStatusType | DeletePostActionCreatorType
    | SavePhotoActionCreatorType

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_USER_STATUS = 'SET_USER_STATUS';
export const DELETE_AC_POST = 'DELETE_AC_POST';
export const SAVE_PHOTO = 'SAVE_PHOTO';

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any,
    status: string
}

export type ProfileDataType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
};
type ContactsType = {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: null,
    mainLink: null
}
type PhotosType = {
    small: string
    large: string
}

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'I disagree', likeCount: 12 },
        { id: 3, message: 'Its impossible', likeCount: 12 },
        { id: 4, message: 'Whats going on?', likeCount: 12 }
    ],
    newPostText: 'itkamasutra',
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts],
            };
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_AC_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
const setUserProfile = (profile: ProfileDataType) => ({ type: SET_USER_PROFILE, profile })
const setUserStatus = (status: ProfileDataType) => ({ type: SET_USER_STATUS, status })
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const deletePostActionCreator = (postId: any) => {
    return {
        type: DELETE_AC_POST, postId
    }
}
export const savePhotoActionCreator = (photos: any) => {
    return {
        type: SAVE_PHOTO, photos
    }
}

//thunk
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response));
}

export const updateUserStatus = (status: any) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoActionCreator(response.data.data.photos)); 
    }
}