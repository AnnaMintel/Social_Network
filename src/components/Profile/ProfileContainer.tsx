import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';
import { getUserProfile , ProfileDataType} from "../../redux/profileReducer";
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

    //redirect
    //@ts-ignore
    if (!this.props.isAuth) return <Navigate to={'/login'} />

    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
};

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = (props: ProfileContainerType) => {
  return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, { getUserProfile  },)(WithUrlDataContainerComponent)
