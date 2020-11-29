import userPhoto from "./../../../assets/images/avataaars.png";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} key={user.id}>
        <Grid container wrap="nowrap" justify="center">
          <Grid item xs={2}>
            <NavLink to={"profile/" + user.id}>
              <Avatar
                alt={user.name}
                src={user.photos.small != null ? user.photos.small : userPhoto}
              />
            </NavLink>
          </Grid>
          <Grid xs={7} item>
            <Typography noWrap>{user.name + user.status}</Typography>
          </Grid>
          <Grid item xs={2}>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default User;
