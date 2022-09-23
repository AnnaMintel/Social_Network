import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { ProfileDataType, setUserProfile } from "../../redux/profileReducer";
import { RootStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

type MapStatePropsType = {
  profile: ProfileDataType | null
  param?: any
}

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileDataType) => void
}

export type ProfileContainerType = MapStatePropsType & MapDispatchPropsType 

class ProfileContainer extends React.Component<ProfileContainerType> {

  componentDidMount() {
    let userId = this.props.param.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response: any) => {
        this.props.setUserProfile(response.data);
      });
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

const WithUrlDataContainerComponent = (props: ProfileContainerType) => {
  return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, { setUserProfile },)(WithUrlDataContainerComponent)
