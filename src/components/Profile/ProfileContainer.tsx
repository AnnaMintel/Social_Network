import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';
import { compose } from "redux";
import { getUserProfile, getUserStatus, ProfileDataType, savePhoto, updateUserStatus } from "../../redux/profileReducer";
import { RootStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

type MapStatePropsType = {
  profile: ProfileDataType | null
  params?: any
  status: string
  updateUserStatus: any
  savePhoto: any
}

export type ProfileContainerType = MapStatePropsType

const ProfileContainer = (props: any) => {

  let { userId } = useParams();

  if (!userId) {
    userId = props.authUserId;
  }

  useEffect(() => {
    props.getUserProfile(userId);
    props.getUserStatus(userId);
  }, [userId])

  //redirect
  if (!props.isAuth) return <Navigate to={'/login'} />

  return <Profile
    {...props}
    profile={props.profile}
    status={props.status}
    updateUserStatus={props.updateUserStatus}
    savePhoto={props.savePhoto} />

};

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto })
)(ProfileContainer)

