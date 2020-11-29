import { Link } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import SettingsApplicationsRoundedIcon from "@material-ui/icons/SettingsApplicationsRounded";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
});

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      open={props.isOpen}
      onClose={() => {
        props.toggleDrawer(!props.isOpen);
      }}
    >
      <List
        className={classes.list}
        onClick={() => {
          props.toggleDrawer(!props.isOpen);
        }}
      >
        <ListItem button component={Link} to={"/profile"}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"profile"} />
        </ListItem>
        <ListItem button component={Link} to={"/users"}>
          <ListItemIcon>
            <GroupRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={"users"} />
        </ListItem>
        <ListItem button component={Link} to={"/dialogs"}>
          <ListItemIcon>
            <GroupRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={"dialogs"} />
        </ListItem>
        <ListItem button component={Link} to={"/news"}>
          <ListItemIcon>
            <GroupRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={"news"} />
        </ListItem>
        <ListItem button component={Link} to={"/music"}>
          <ListItemIcon>
            <MusicNoteRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={"music"} />
        </ListItem>
        <ListItem button component={Link} to={"/settings"}>
          <ListItemIcon>
            <SettingsApplicationsRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={"settings"} />
        </ListItem>
        <ListItem button component={Link} to={"/settings"}>
          <FriendsContainer />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
