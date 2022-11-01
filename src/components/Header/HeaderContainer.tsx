import { connect } from "react-redux";
import React from "react";
import { Header } from "./Header";
import { getAuthUserData, logout} from "../../redux/authReducer";
import { RootStateType } from "../../redux/redux-store";


class HeaderContainer extends React.Component<any> {

  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)


