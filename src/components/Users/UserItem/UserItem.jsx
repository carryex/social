import userPhoto from "./../../../assets/images/avataaars.png";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const UserItem = (props) => {
  return (
    <Grid container justify="center">
      {props.users.map((u) => (
        <Grid item xs={12} key={u.id}>
          <Grid container wrap="nowrap" justify="center">
            <Grid item xs={2}>
              <NavLink to={"profile/" + u.id}>
                <Avatar
                  alt={u.name}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </Grid>
            <Grid xs={7} item>
              <Typography noWrap>{u.name + u.status}</Typography>
            </Grid>
            <Grid item xs={2}>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
export default UserItem;
