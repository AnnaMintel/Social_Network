import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";


export const MyPostsContainer = (props: any) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text: any) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (<MyPosts  updateNewPostText= {onPostChange} 
                    addPost={addPost} 
                    posts={state.profilePage.posts} 
                    newPostText={state.profilePage.newPostText}
         />)

};
