import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile, ProfileDataType } from "../../redux/profileReducer";
import { RootStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

type MapStatePropsType = {
  profile: ProfileDataType | null
  params?: any
}

export type ProfileContainerType = MapStatePropsType

const ProfileContainer = (props: any) => {

  let { userId } = useParams();

  useEffect(() => {
    props.getUserProfile(userId);
  }, [])
  return <Profile {...props} profile={props.profile} />

};

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile }),
  // withAuthRedirect
)(ProfileContainer)

