
let rerenderEntireTree = () => {
    console.log("state is changed")
}

let state = {
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
}

// window.state = state;

export const addPost = (postMessage: any) => {
    let newPost = {
        id: 5, 
        message: state.profilePage.newPostText,
        likeCount: 0 
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = " ";
    // @ts-ignore
    rerenderEntireTree (state);
}

export const updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
    // @ts-ignore
    rerenderEntireTree (state);
}

export const subscribe = (observer:any) => {
    rerenderEntireTree = observer;
}

export default state;