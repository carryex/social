import s from "./Avatar.module.css";
const Avatar = (props) => {
  return (
    <div className={s.avatar}>
      <img src={props.avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
