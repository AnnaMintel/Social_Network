import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import { ProfileContainerType } from "./ProfileContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: ProfileContainerType) => {
  
  return (
    <div> 
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer  />
    </div>
  );
};
