import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
export const Preloader = (props) => {
  return (
    <Grid container justify="center">
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};
export default Preloader;
