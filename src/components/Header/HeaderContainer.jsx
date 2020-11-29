import React from "react";
import { toogleIsOpen as toogleSideBarIsOpen } from "../../redux/navigationReducer";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/auth-reducer";
class HeaderContainer extends React.Component {

  onMenuChanged = (sideBarIsOpen) => {
    this.props.toogleSideBarIsOpen(!sideBarIsOpen);
  };

  render() {
    return <Header {...this.props} onMenuChanged={this.onMenuChanged} />;
  }
}

let mapStateToProps = (state) => {
  return {
    sideBarIsOpen: state.sideBar.isOpen,
    currentPageTitle: state.sideBar.currentPageTitle,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  toogleSideBarIsOpen,
  logout,
})(HeaderContainer);
