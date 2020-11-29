import Grid from "@material-ui/core/Grid";
import UserItem from "./UserItem/UserItem";
import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Pagination
          count={pagesCount}
          page={props.currentPage}
          siblingCount={1}
          onChange={(e, page) => {
            props.onPageChanged(page);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <UserItem
          users={props.users}
          followingInProgress={props.followingInProgress}
          toogleFollowingInProgress={props.toogleFollowingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      </Grid>
    </Grid>
  );
};

export default Users;
