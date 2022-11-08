import React from "react";
import { ProfileDataType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import { useSelector } from "react-redux";

type ProfileInfoType = {
  profile: ProfileDataType | null
  status: string
  updateUserStatus: any
  savePhoto: any
}

export const ProfileInfo = ({profile, status, updateUserStatus, savePhoto}: ProfileInfoType) => {

  let userId = useSelector<any>(state => state.auth.userId);

  if(!profile) {
    return <Preloader />
  }

  const onFhotoSelected = (e:any) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }


  return (
    <div>       
      <div className={s.discriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.userAvatar} />
        { userId === profile.userId && <input type={'file'} onChange={onFhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>

        <div>Full name: {profile.fullName}</div>
        <div>About me: {profile.aboutMe}</div>
        <div>Loofing for a job: {profile.lookingForAJob}</div>
        <div>What kind of job I prefer? {profile.lookingForAJobDescription}</div>
        
      </div>
    </div >
  );
};

type ContactType = {
  contactTitle: string
  contactValue: any
}

export const Contact = ({contactTitle, contactValue}:ContactType) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
}