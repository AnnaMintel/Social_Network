import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { RootStateType } from "../../../redux/store";
import { MyPosts } from "./MyPosts";


export const MyPostsContainer = (props: any) => {

  const dispatch = useDispatch();

  const profilePage = useSelector<RootStateType, any>(state => state.profilePage)

  let addPost = () => {
    dispatch(addPostActionCreator());
  };

  let onPostChange = (text: any) => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action);
  }

  return <MyPosts updateNewPostText={onPostChange}
    addPost={addPost}
    posts={profilePage.posts}
    newPostText={profilePage.newPostText} />
}


