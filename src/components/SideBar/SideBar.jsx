import { NavLink } from "react-router-dom";
import s from "./SideBar.module.css";
import FriendsContainer from "./Friends/FriendsContainer";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";

const useStyles = makeStyles({
  nav: {
    width: 250,
  },
});

const sideLinks = ["profile", "messages", "users", "news", "music", "settings"];

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      open={props.isOpen}
      onClose={() => {
        props.toggleDrawer(!props.isOpen);
      }}
    >
      <nav
        className={classes.nav}
        role="presentation"
        onClick={() => {
          props.toggleDrawer(!props.isOpen);
        }}
        onKeyDown={() => {
          props.toggleDrawer(!props.isOpen);
        }}
      >
        <List>
          {sideLinks.map((anchor) => (
            <ListItem key={anchor}>
              <div className={s.item}>
                <NavLink to={"/" + anchor} activeClassName={s.activeLink}>
                  {anchor}
                </NavLink>
              </div>
            </ListItem>
          ))}

          {/*<div className={s.item}>/!*<FriendsContainer />*!/</div>*/}
        </List>
      </nav>
    </Drawer>
  );
};

export default SideBar;
