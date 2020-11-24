import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
import Avatar from "./../../UI/Avatar/Avatar"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <Avatar avatar={props.avatar}/>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
