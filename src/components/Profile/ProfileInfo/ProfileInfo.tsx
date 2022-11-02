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

export const ProfileInfo = (props: ProfileInfoType) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"
          alt="" />
      </div> */}
       
      <div className={s.discriptionBlock}>
        <img src={props.profile.photos.large} />
        
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>

        <div>Full name: {props.profile.fullName}</div>
        <div>About me: {props.profile.aboutMe}</div>
        <div>Loofing for a job: {props.profile.lookingForAJob}</div>
        <div>What kind of job am I liiking? {props.profile.lookingForAJobDescription}</div>
        <div>My GitHub: {props.profile.contacts.github}</div>
      </div>
    </div >
  );
};
