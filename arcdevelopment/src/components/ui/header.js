import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import logo from '../../assets/logo.svg';
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

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "7em"
    },
    tabContainer: {
        marginLeft: "auto" //aligns tabs to right of header
    },
    tab: {
        ...theme.typography.tab,    // bring in the theme settings and then add the following settings
        minWidth: 10, // spacing between tabs NOTE: integer, not a string
        marginLeft: "25px"  // keep spacing the same across different displays, don't use rem
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    }
}))

export default function Header(props) {
    const classes = useStyles()
    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar color="primary">
            <Toolbar disableGutters={true}>
                <img src={logo} className={classes.logo} alt="logo"/>
                <Tabs className={classes.tabContainer}>
                    <Tab className={classes.tab} label="Home"/>
                    <Tab className={classes.tab} label="Services"/>
                    <Tab className={classes.tab} label="Revolution"/>
                    <Tab className={classes.tab} label="About Us"/>
                    <Tab className={classes.tab} label="Contact Us"/>
                </Tabs>
                <Button variant="contained" size="small" color="secondary" className={classes.button}>Free Estimate</Button>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}