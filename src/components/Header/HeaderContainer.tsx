import axios from "axios";
import { connect } from "react-redux";
import React from "react";
import { Header } from "./Header";
import { setUserDataAC } from "../../redux/authReducer";
import { RootStateType } from "../../redux/redux-store";
import { headerAPI } from "../../api/api";


class HeaderContainer extends React.Component<any> {

  componentDidMount() {
    headerAPI.getHeader().then((data: any) => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          this.props.setUserDataAC(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { setUserDataAC })(HeaderContainer)


