import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile, getUserStatus, ProfileDataType, updateUserStatus } from "../../redux/profileReducer";
import { RootStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

type MapStatePropsType = {
  profile: ProfileDataType | null
  params?: any
  status: string
  updateUserStatus: any
}

export type ProfileContainerType = MapStatePropsType

const ProfileContainer = (props: any) => {

  let { userId } = useParams();

  useEffect(() => {
    props.getUserProfile(userId);
    props.getUserStatus(userId);
  }, [])

  return <Profile
    {...props}
    profile={props.profile}
    status={props.status}
    updateUserStatus={props.updateUserStatus} />

};

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus })
)(ProfileContainer)

