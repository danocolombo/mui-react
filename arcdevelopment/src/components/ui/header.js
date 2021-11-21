import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    "&:hover": {
      backgroundColor: "transparent",
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setTabIdentifier(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setMenuOpen(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  useEffect(() => {
    //if trying to get / HOME , endure tabIdentifier is 0
    switch (window.location.pathname){
      case "/":
        if (tabIdentifier !== 0){
          setTabIdentifier(0);
        }
        break;
      case "/services":
        if (tabIdentifier !== 1 || selectedIndex !== 0){
          setTabIdentifier(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (tabIdentifier !== 1 || selectedIndex !== 1){
          setTabIdentifier(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (tabIdentifier !== 1 || selectedIndex !== 2){
          setTabIdentifier(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (tabIdentifier !== 1 || selectedIndex !== 3){
          setTabIdentifier(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (tabIdentifier !== 2){
          setTabIdentifier(2);
        }
        break;
      case "/about":
        if (tabIdentifier !== 3){
          setTabIdentifier(3);
        }
        break;
      case "/contact":
        if (tabIdentifier !== 4){
          setTabIdentifier(4);
        }
        break;
      case "/estimate":
        if (tabIdentifier !== 5){
          setTabIdentifier(5);
        }
        break;
      default:
        setTabIdentifier(0);
        break;
    }
  }, [tabIdentifier,selectedIndex]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color="primary">
          <Toolbar disableGutters={true}>
            <Button
              className={classes.logContainer}
              disableRipple
              component={Link}
              to="/"
              onClick={() => setTabIdentifier(0)}
            >
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
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={(event) => handleClick(event)}
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
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(event) => {
                    handleMenuItemClick(event, i); setMenuOpen(1);
                    handleClose();
                  }}
                  selected={i === selectedIndex && menuOpen === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
