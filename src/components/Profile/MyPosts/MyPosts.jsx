import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likesCount={post.likesCount}
      avatar={post.avatar}
    />
  ));

  let addNewPost = (formData) => {
    props.addPost(formData.newPostBody);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>MY POSTS</Typography>
      </Grid>
      <Grid item xs={12}>
        <AddPostForm onSubmit={addNewPost} />
      </Grid>
      <Grid item xs={12}>
        <div className={s.posts}>{postsElements}</div>
      </Grid>
    </Grid>
  );
};

export default MyPosts;
