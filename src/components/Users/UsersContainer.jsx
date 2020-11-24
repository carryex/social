import React from "react";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  toogleIsFetching,
  setCurrentPage,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "./../UI/Preloader/Preloader";
import { setCurrentPageTitle } from "../../redux/navigationReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPageTitle(this.props.pageTitle);
    this.props.toogleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toogleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(response.data.items);
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
})(UsersContainer);
