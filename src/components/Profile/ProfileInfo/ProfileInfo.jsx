import userPhoto from "../../../assets/images/avataaars.png";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
          alt={props.profile.fullName}
        />
      </Grid>
      <Grid item xs={2}>
        <Avatar
          alt={props.profile.fullName}
          src={
            props.profile.photos.small != null
              ? props.profile.photos.small
              : userPhoto
          }
        />
      </Grid>

      <Grid item xs={10}>
        <Typography>{props.profile.fullName}</Typography>
        <Typography color="textSecondary">{props.profile.aboutMe}</Typography>
      </Grid>
      <Grid item xs={12}>
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
