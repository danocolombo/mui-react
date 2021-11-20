import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
  },
  tabContainer: {
    marginLeft: "auto", //aligns tabs to right of header
  },
  tab: {
    ...theme.typography.tab, // bring in the theme settings and then add the following settings
    minWidth: 10, // spacing between tabs NOTE: integer, not a string
    marginLeft: "25px", // keep spacing the same across different displays, don't use rem
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [tabIdentifier, setTabIdentifier] = useState(0);

  const handleChange = (e, value) => {
    setTabIdentifier(value);
  };
  useEffect(() => {
    //if trying to get / HOME , endure tabIdentifier is 0
    if (window.location.pathname === "/" && tabIdentifier !== 0) {
      setTabIdentifier(0);
    } else if (
      window.location.pathname === "/services" &&
      tabIdentifier !== 1
    ) {
      setTabIdentifier(1);
    } else if (
      window.location.pathname === "/revolution" &&
      tabIdentifier !== 2
    ) {
      setTabIdentifier(2);
    } else if (window.location.pathname === "/about" && tabIdentifier !== 3) {
      setTabIdentifier(3);
    } else if (window.location.pathname === "/contact" && tabIdentifier !== 4) {
      setTabIdentifier(4);
    } else if (
      window.location.pathname === "/estimate" &&
      tabIdentifier !== 5
    ) {
      setTabIdentifier(5);
    }
  }, [tabIdentifier]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color="primary">
          <Toolbar disableGutters={true}>
            <Button className={classes.logContainer} disableRipple component={Link} to="/" onClick={() => setTabIdentifier(0)}>
              <img src={logo} className={classes.logo} alt="logo" />
            </Button>
            <Tabs
              value={tabIdentifier}
              onChange={handleChange}
              indicatorColor="primary"
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
