import s from "./ProfileInfo.module.css";
import Preloader from "../../UI/Preloader/Preloader";
import userPhoto from "../../../assets/images/avataaars.png";
import styles from "../../Users/Users.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://picsum.photos/800/200" alt="profile info" />
      </div>

      <div className={s.descriptionBlock}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
          alt="Users avatar"
          className={styles.avatar}
        />
        {/*<img src={props.profile.photos.large} alt="Profile" />*/}
        <span>{props.profile.fullName}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
