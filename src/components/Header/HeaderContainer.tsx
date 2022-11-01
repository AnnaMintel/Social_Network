import { connect } from "react-redux";
import React from "react";
import { Header } from "./Header";
import { logout} from "../../redux/authReducer";
import { RootStateType } from "../../redux/redux-store";


class HeaderContainer extends React.Component<any> {

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {logout })(HeaderContainer)


