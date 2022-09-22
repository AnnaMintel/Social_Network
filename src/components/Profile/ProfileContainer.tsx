import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { setUserProfile } from "../../redux/profileReducer";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component {

  componentDidMount() {
    //@ts-ignore
    let userId = this.props.param.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response: any) => {
        //@ts-ignore
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      //@ts-ignore
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
};

let mapStateToProps = (state: any) => ({
  profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = (props: any) => {
  return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, { setUserProfile },)(WithUrlDataContainerComponent)
