import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { setCurrentPageTitle } from "../../redux/navigationReducer";
import { getProfile } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPageTitle(this.props.pageTitle);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getProfile(userId).then((response) => {
      this.props.setUserProfile(response);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    pageTitle: state.profilePage.pageTitle,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
  setCurrentPageTitle,
})(WithUrlDataContainerComponent);
