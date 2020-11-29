import React from "react";
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import { setCurrentPageTitle } from "../../redux/navigationReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

import Preloader from "../UI/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPageTitle(this.props.pageTitle);
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users {...this.props} onPageChanged={this.onPageChanged} />
        )}
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    pageTitle: state.usersPage.pageTitle,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setCurrentPageTitle,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
