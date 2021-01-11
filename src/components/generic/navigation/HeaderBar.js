import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import MUIToolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "../../generic/containers/Container";

const useStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },

  menuButton: {
    color: theme.palette.grey.main,
    border: `solid 1px ${theme.palette.grey.main}`,
    borderRadius: "4px",
    padding: "4px 8px",
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translate(0%, -50%)",
  },
  logo: { maxHeight: "150px", maxWidth: "65%", padding: "30px 0" },
}));

const HeaderBar = (props = {}) => {
  let toggleDrawer, imgSrc;
  ({ toggleDrawer, imgSrc, ...props } = props);
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <MUIToolbar className={classes.toolbar}>
        <Container style={{ position: "relative" }}>
          <img src={imgSrc} className={classes.logo} alt="" />

          <IconButton
            onClick={toggleDrawer}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </MUIToolbar>
    </AppBar>

    // </div>
  );
};

export default HeaderBar;
