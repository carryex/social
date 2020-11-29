import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <IconButton
            onClick={() => {
              props.onMenuChanged(props.sideBarIsOpen);
            }}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.currentPageTitle}
          </Typography>
          {props.isAuth ? (
            <div>
              <span>{props.login}</span>
              <Button onClick={props.logout} color="inherit">
                Log out
              </Button>
            </div>
          ) : (
            <Button component={RouterLink} to="/login" color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
