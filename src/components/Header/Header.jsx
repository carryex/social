import Logo from "./../../logo.svg";
// import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={() => {
            props.onMenuChanged(props.sideBarIsOpen);
          }}
          edge="start"
          className={classes.menuButton}
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
          <Button component={RouterLink} to="/profile" color="inherit">
            {props.login}
          </Button>
        ) : (
          <Button component={RouterLink} to="/login" color="inherit">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
