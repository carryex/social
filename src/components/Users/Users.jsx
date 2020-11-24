import styles from "./Users.module.css";
import userPhoto from "./../../assets/images/avataaars.png";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";
export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={styles.pagination}>
        {pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? styles.active : null}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="Users avatar"
                  className={styles.avatar}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toogleFollowingInProgress(true, u.id);
                    userAPI.unfollow(u.id).then((response) => {
                      if (response.resultCode == 0) {
                        props.unfollow(u.id);
                      }
                      props.toogleFollowingInProgress(false, u.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toogleFollowingInProgress(true, u.id);
                    userAPI.follow(u.id).then((response) => {
                      if (response.resultCode == 0) {
                        props.follow(u.id);
                      }
                      props.toogleFollowingInProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.country}</div> */}
              {/* <div>{u.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
