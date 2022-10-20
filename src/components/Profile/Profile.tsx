import React from "react";
import { updateUserStatus } from "../../redux/profileReducer";
import { MyPosts } from "./MyPosts/MyPosts";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import { ProfileContainerType } from "./ProfileContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: ProfileContainerType) => {

  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer />
    </div>
  );
};
