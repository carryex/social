import React from "react";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  toogleIsFetching,
  setCurrentPage,
  toogleFollowingInProgress,
  getUsersThunkCreator,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "./../UI/Preloader/Preloader";
import { setCurrentPageTitle } from "../../redux/navigationReducer";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPageTitle(this.props.pageTitle);
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.toogleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(response.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users {...this.props} onPageChanged={this.onPageChanged} />
        )}
      </>
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  toogleIsFetching,
  setCurrentPage,
  setCurrentPageTitle,
  toogleFollowingInProgress,
  getUsersThunkCreator,
})(UsersContainer);
