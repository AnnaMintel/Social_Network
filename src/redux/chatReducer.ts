import { chatAPI, ChatMessageType } from './../api/chat-api';


export type InitialStateType = typeof initialState;

const initialState = {
    messages: [] as ChatMessageType[]
};


export const chatReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED': {
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        }
        default:
            return state;
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'SN/chat/MESSAGES_RECEIVED', payload: { messages }
    } as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCReator = (dispatch: any) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageType[]) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

//thunk
export const startMessagesListening = ():any => async (dispatch: any) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCReator)
};

export const stopMessagesListening = ():any => async (dispatch: any) => {
    chatAPI.unsubscribe(newMessageHandlerCReator)
    chatAPI.stop()
};

export const sendMessage= (message: string):any => async (dispatch: any) => {
    chatAPI.sendMessage(message)
};



