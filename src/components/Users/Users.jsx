import Grid from "@material-ui/core/Grid";
import User from "./User/User";
import React from "react";
import Paginator from "../UI/Paginator/Paginator";
export const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  followingInProgress,
  follow,
  unfollow,
  users,
}) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Paginator
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
        />
      </Grid>
      <Grid item xs={12}>
        {users.map((user) => (
          <User
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            key={user.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Users;
