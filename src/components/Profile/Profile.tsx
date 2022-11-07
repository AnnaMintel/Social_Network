import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import { ProfileContainerType } from "./ProfileContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: ProfileContainerType) => {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus} />
      <MyPostsContainer />
    </div>
  );
};
