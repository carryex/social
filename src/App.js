import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { Container } from "@material-ui/core";
import Login from "./components/Login/Login";
import { withStyles } from "@material-ui/styles";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/UI/Preloader/Preloader";
import store from "./redux/reduxStore";
import { withSuspense } from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    const { classes } = this.props;
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <Container maxWidth="sm" className={classes.root}>
        <CssBaseline />
        <HeaderContainer />
        <SideBarContainer />
        <Toolbar />

        <Grid container>
          {/*  <Grid container className={classes.root} spacing={2}>*/}
          <Grid item xs={12}>
            <Route
              path="/profile/:userId?"
              render={withSuspense(DialogsContainer)}
            />
            <Route path="/dialogs" render={withSuspense(ProfileContainer)} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const AppContainer = compose(
  withStyles(useStyles),
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);

const SocialReactApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SocialReactApp;
