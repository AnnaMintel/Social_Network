import { Console } from "console";
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
type ActionType = AddPostActionActionType | UpdateNewPostTextActionType | SetUserProfile

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';


export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
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
    profile: null
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile: ProfileDataType) => ({ type:  SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}