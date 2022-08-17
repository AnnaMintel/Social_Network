import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: any) => {
  return (
    <div> 
      <ProfileInfo />
      <MyPostsContainer store={props.store} posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch} />
    </div>
  );
};
