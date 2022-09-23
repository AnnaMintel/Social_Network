import React from "react";
import { ProfileDataType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";

type ProfileInfoType = {
  profile: ProfileDataType | null
}

export const ProfileInfo = (props: ProfileInfoType) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"
          alt="" />
      </div>
       
      <div className={s.discriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + discription
      </div>
    </div >
  );
};
