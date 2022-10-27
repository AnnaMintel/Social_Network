import { DialogItemType } from "../components/Dialogs/DialogItem/DialogItem";
import { MessageType } from "../components/Dialogs/Message/Message";

export const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
    newMessageBody: string
}

type ActionType = SendMessageActionType 

export type DialogsPageType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
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
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {

    let stateCopy;

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            stateCopy = {
                ...state,
                messages: [...state.messagesData]
            }
            stateCopy.messagesData.push({ id: 7, message: body });
            return stateCopy;
        }
        default:
            return state;

    }
}

export const sendMessageActionCreator = (newMessageBody: string) => ({ type: SEND_MESSAGE, newMessageBody })
