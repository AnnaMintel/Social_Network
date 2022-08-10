import { dialogsReducer, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from './dialogsReducer';
import { ADD_POST, profileReducer, UPDATE_NEW_POST_TEXT } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';


const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeCount: 12 },
                { id: 2, message: 'I disagree', likeCount: 12 },
                { id: 3, message: 'Its impossible', likeCount: 12 },
                { id: 4, message: 'Whats going on?', likeCount: 12 }
            ],
            newPostText: 'itkamasutra'
        },

        dialogsPage: {
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
        },
        sidebar: {}
    },
    cv() {
        console.log("state is changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        // @ts-ignore
        this._callSubscriber = observer;
    },

    dispatch(action: any) {        // {type: 'название действия'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        // @ts-ignore
        this._callSubscriber(this._state);
    }

}

export default store;
// window.store = store;
// store - OOP