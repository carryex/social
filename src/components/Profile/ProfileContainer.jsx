import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { setCurrentPageTitle } from "../../redux/navigationReducer";

import { compose } from "redux";
import { getAuthUserData } from "../../redux/auth-reducer";

import Preloader from "../UI/Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPageTitle(this.props.pageTitle);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    pageTitle: state.profilePage.pageTitle,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPageTitle,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    getAuthUserData,
  }),
  withRouter
)(ProfileContainer);
