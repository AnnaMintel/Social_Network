import { DialogsPageType } from "./state";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

type ActionType = SendMessageActionType | UpdateNewMessageBodyActionType

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 7, message: body });
            return state;

        default:
            return state;

    }
} 

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyActionCreator = (body: string) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })