import { DialogItemType } from "../components/Dialogs/DialogItem/DialogItem";
import { MessageType } from "../components/Dialogs/Message/Message";

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


export type DialogsPageType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
    newMessageBody: string
}

const initialState = {
    dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Angelina' },
        { id: 4, name: 'Vanessa' },
        { id: 5, name: 'Eva' },
        { id: 6, name: 'Rodrik' },
        { id: 7, name: 'Helen' }
    ],
    messagesData: [
        { id: 1, message: 'Hi!!!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'Whats going on?' },
        { id: 4, message: 'Hello, my dear' },
        { id: 5, message: 'What are you doing today?' },
        { id: 6, message: 'Happy weekends!' }
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {

    let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            stateCopy = {
                ...state,
                newMessageBody: action.body
            }
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messagesData]
            }
            stateCopy.messagesData.push({ id: 7, message: body });
            return stateCopy;
        }
        default:
            return state;

    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyActionCreator = (body: string) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })