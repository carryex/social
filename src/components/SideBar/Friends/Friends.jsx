import Friend from "./Friend/Friend";

const Friends = (props) => {
  let friendsElements = props.friends.map((friend) => (
    <Friend key={friend.id} name={friend.name} avatar={friend.avatar} />
  ));

  return (
    <div>
      <div>Friends</div>
      <div>{friendsElements}</div>
    </div>
  );
};

export default Friends;
