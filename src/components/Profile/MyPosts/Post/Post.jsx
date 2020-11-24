import Avatar from "../../../UI/Avatar/Avatar";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <Avatar avatar={props.avatar} />
  
      <p>{props.message}</p>
      <span>{props.likesCount} like</span>
    </div>
  );
};

export default Post;
