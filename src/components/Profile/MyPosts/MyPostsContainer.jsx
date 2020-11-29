import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);

export default MyPostsContainer;
