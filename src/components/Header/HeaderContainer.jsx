import React from "react";
import { toogleIsOpen as toogleSideBarIsOpen } from "../../redux/navigationReducer";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData, setAuth } from "../../redux/auth-reducer";
import { authMe } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authMe().then((response) => {
      // this.props.setUserData("1276", "pokinsokha@gmail.com", "carryex");
      // this.props.setAuth(true);
    });
  }

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
  setUserData,
  setAuth,
})(HeaderContainer);
