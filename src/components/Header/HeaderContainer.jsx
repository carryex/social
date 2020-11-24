import React from "react";
import { toogleIsOpen as toogleSideBarIsOpen } from "../../redux/navigationReducer";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, setAuth } from "../../redux/auth-reducer";
import { authMe } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authMe().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        this.props.setAuthUserData(id, email, login);
        this.props.setAuth(true);
      }
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
  setAuthUserData,
  setAuth,
})(HeaderContainer);
