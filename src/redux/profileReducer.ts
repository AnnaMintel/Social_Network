import { ProfilePageType } from "./state";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type AddPostActionActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type ActionType = AddPostActionActionType | UpdateNewPostTextActionType 

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch(action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''; 
            return state;

        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;

        default: 
        return state;
    }
} 

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text: any) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}