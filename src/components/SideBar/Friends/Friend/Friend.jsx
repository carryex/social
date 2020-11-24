import Avatar from "../../../UI/Avatar/Avatar";

const Friend = (props) => {
  return (
    <div>
      <Avatar avatar={props.avatar} />
      <div>
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Friend;
