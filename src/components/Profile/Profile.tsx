import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost} />
    </div>
  );
};
