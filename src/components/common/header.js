import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import samarthanamlogo from "../../assests/images/samarthanamlogo.png";
import applogo from "../../assests/images/applogo.png";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit,
    verticalAlign: "center",
    color: "#FFFFFF"
  },
  input: {
    display: "none"
  },
  masterLogo: {
    height: "75px",
    float: "left"
  },
  menuLogo: {
    height: "80px",
    float: "left",
    verticalAlign: "center"
  },
  menuDiv: {
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    textAlign: "right"
  },
  menuGrid: {
    height: "5em",
    background: "	#1D335A",
    color: "#FFFFFF"
  }
});

function Header(props) {
  const { classes } = props;
  const activeStyle = { color: "#FFFFFF" };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <img
            className={classes.masterLogo}
            src={samarthanamlogo}
            alt="Logo"
          />
        </Grid>
        <Grid container className={classes.menuGrid}>
          <Grid item xs={12} sm={6}>
            <img className={classes.menuLogo} src={applogo} alt="Logo" />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.menuDiv}>
            <nav>
              <NavLink to="/" activeStyle={activeStyle} exact>
                <Button className={classes.button}>Dashboard</Button>
              </NavLink>
              <NavLink to="/about" activeStyle={activeStyle}>
                <Button className={classes.button}>About</Button>
              </NavLink>
              <NavLink to="/contact_us" activeStyle={activeStyle}>
                <Button className={classes.button}>Contact Us</Button>
              </NavLink>
            </nav>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
