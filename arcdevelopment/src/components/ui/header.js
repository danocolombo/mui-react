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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
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
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [tabIdentifier, setTabIdentifier] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setTabIdentifier(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 0
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 2
    }
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event)
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 }
  ];  

  const tabs = (
    <React.Fragment>
      <Tabs
        value={tabIdentifier}
        onChange={handleChange}
        indicatorColor="primary"
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            // href={route.link}
            // onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
{/*         
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
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
        /> */}
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
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{zIndex: 1302}}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setOpenMenu(1);
              handleClose();
            }}
            selected={i === selectedIndex && openMenu === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  useEffect(() => {
  //   [...menuOptions, ...routes].forEach(route => {
  //     switch (window.location.pathname) {
  //       case `${route.link}`:
  //         if (value !== route.activeIndex) {
  //           setValue(route.activeIndex);
  //           if (
  //             route.selectedIndex &&
  //             route.selectedIndex !== selectedIndex
  //           ) {
  //             setSelectedIndex(route.selectedIndex);
  //           }
  //         }
  //         break;
  //       case "/estimate":
  //         if (value !== false) {
  //           setValue(false);
  //         }

  //         break;
  //       default:
  //         break;
  //     }
  //   });



  // }, [value, menuOptions, selectedIndex, routes]);


    //if trying to get / HOME , endure tabIdentifier is 0
    switch (window.location.pathname) {
      case "/":
        if (tabIdentifier !== 0) {
          setTabIdentifier(0);
        }
        break;
      case "/services":
        if (tabIdentifier !== 1 || selectedIndex !== 0) {
          setTabIdentifier(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (tabIdentifier !== 1 || selectedIndex !== 1) {
          setTabIdentifier(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (tabIdentifier !== 1 || selectedIndex !== 2) {
          setTabIdentifier(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (tabIdentifier !== 1 || selectedIndex !== 3) {
          setTabIdentifier(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (tabIdentifier !== 2) {
          setTabIdentifier(2);
        }
        break;
      case "/about":
        if (tabIdentifier !== 3) {
          setTabIdentifier(3);
        }
        break;
      case "/contact":
        if (tabIdentifier !== 4) {
          setTabIdentifier(4);
        }
        break;
      case "/estimate":
        if (tabIdentifier !== 5) {
          setTabIdentifier(5);
        }
        break;
      default:
        setTabIdentifier(0);
        break;
    }
  }, [tabIdentifier, selectedIndex]);

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
          {routes.map(route => (
            <ListItem divider button component={Link} to={route.link} selected={value === route.activeIndex} onClick={() => {setOpenDrawer(false); setValue(routes.activeIndex);}}>
              <ListItemText className={value === route.activeIndex ? [ classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>{route.name}</ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected
            }}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}   
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar} color="primary">
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
