import React from "react";
import { ProfileDataType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";

type ProfileInfoType = {
  profile: ProfileDataType | null
  status: string
  updateUserStatus: any
}

export const ProfileInfo = ({profile, status, updateUserStatus}: ProfileInfoType) => {
  if(!profile) {
    return <Preloader />
  }
  return (
    <div>       
      <div className={s.discriptionBlock}>
        <img src={profile.photos.large} />
        
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>

        <div>Full name: {profile.fullName}</div>
        <div>About me: {profile.aboutMe}</div>
        <div>Loofing for a job: {profile.lookingForAJob}</div>
        <div>What kind of job am I liiking? {profile.lookingForAJobDescription}</div>
        <div>My GitHub: {profile.contacts.github}</div>
      </div>
    </div >
  );
};
