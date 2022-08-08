
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
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
                { id: 6, name: 'Rodrik' }
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
    },
    _callSubscriber() {
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
       
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = " ";
            //@ts-ignore
            this._callSubscriberthis(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            // @ts-ignore
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST 
    }
  }
  
 export const updateNewPostTextActionCreator = (text: any) => {
    return {
      type: UPDATE_NEW_POST_TEXT, newText: text 
    }
  }

export default store;
// window.store = store;
// store - OOP