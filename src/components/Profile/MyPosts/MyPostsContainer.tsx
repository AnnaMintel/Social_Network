import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { StoreContext } from "../../../StoreContext";
import { MyPosts } from "./MyPosts";


export const MyPostsContainer = (props: any) => {


  return (
    // @ts-ignore
    <StoreContext.Consumer> {
      (store:any) => {

        let state = store.getState();

        let addPost = () => {
        store.dispatch(addPostActionCreator());
        };
      
        let onPostChange = (text: any) => {
          const action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }

      return <MyPosts updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />
      }
    }
    </StoreContext.Consumer>
  )

};
