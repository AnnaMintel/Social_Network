import { profileReducer, addPostActionCreator, deletePostActionCreator } from './profileReducer';

let state:any = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'I disagree', likeCount: 12 },
        { id: 3, message: 'Its impossible', likeCount: 12 },
        { id: 4, message: 'Whats going on?', likeCount: 12 }
    ]
}

test('new post length should be incremented', () => {
    // 1 test data
    let action:any = addPostActionCreator("it-kamasutra.com");
    // 2 action
    let newState = profileReducer(state, action);
    // 3 expect
    expect(newState.posts.length).toBe(5);
})

test('new length should be after deleting', () => {
    // 1 test data
    let action:any  = deletePostActionCreator(1);
    // 2 action
    let newState = profileReducer(state, action);
    // 3 expect
    expect(newState.posts.length).toBe(3);
})