import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile, ProfileDataType } from "../../redux/profileReducer";
import { RootStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

type MapStatePropsType = {
  profile: ProfileDataType | null
  param?: any
}

export type ProfileContainerType = MapStatePropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

  componentDidMount() {
    let userId = this.props.param.userId;
    //@ts-ignore
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
};

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainer)

