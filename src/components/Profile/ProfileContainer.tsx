import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: any) => ({
  profile: state.profilePage.profile
})

//@ts-ignore
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
