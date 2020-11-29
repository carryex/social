import userPhoto from "../../../assets/images/avataaars.png";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <img
          src={profile.photos.large != null ? profile.photos.large : userPhoto}
          alt={profile.fullName}
        />
      </Grid>
      <Grid item xs={2}>
        <Avatar
          alt={profile.fullName}
          src={profile.photos.small != null ? profile.photos.small : userPhoto}
        />
      </Grid>

      <Grid item xs={10}>
        <Typography>{profile.fullName}</Typography>
        <Typography color="textSecondary">{profile.aboutMe}</Typography>
      </Grid>
      <Grid item xs={12}>
        <ProfileStatusWithHooks
          status={status}
          updateUserStatus={updateUserStatus}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
