import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3rem",
  },
  icon: {
    height: "4rem",
    width: "4rem",
    [theme.breakpoints.down("xs")]: {
        height: "2.5rem",
        width: "2.5rem"
    }
  },
  socialContainer: {
      position: "absolute",
      marginTop: "-6rem",
      right: "1.5em",
      [theme.breakpoints.down("xs")]: {
        right:"0.6rem",
    }
  },
}));
export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.link}
              >
                HOME
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                to="/customsoftware"
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                to="mobileapps"
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                to="websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Revolution
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="decorative graphic"
        src={footerAdornment}
      />
      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
            <img src={facebook} alt="Facebook logo" className={classes.icon}/>
        </Grid>
        <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
            <img src={twitter} alt="Twitter logo" className={classes.icon}/>
        </Grid>
        <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
            <img src={instagram} alt="Instagram logo" className={classes.icon}/>

        </Grid>
      </Grid>
    </footer>
  );
}
