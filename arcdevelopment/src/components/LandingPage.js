import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Typography from "@material-ui/core/Typography";
// import animationDataOrig from "../animations/landinganimation/data";
import animationData from "../animations/development-options1/development-options.json";
import customSoftwareIcon from "../assets/customSoftwareIcon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import ButtonArrow from "./ui/ButtonArrow";
const useStyles = makeStyles((theme) => ({
  animation: {
    maxwidth: "50em",
    minwidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    },
  },
  serviceContainer: {
      marginTop: '12em',
    [theme.breakpoints.down("xs")]: {
        padding: 25,
    },
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


//   const defaultOptions = {
//     loop: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidMid Slice",
//     },
//   };

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {" "}
          {/*========= HERO BLOCK ==========*/}
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the Midwest
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    component={Link}
                    to="/estimate"
                    className={classes.estimateButton}
                    variant="contained"
                    onClick={() => props.setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/revolution"
                    className={classes.learnButtonHero}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              {/* <Lottie options={defaultOptions} height={"100%"} width={"100%"} /> */}
              <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
            //   isStopped={this.state.isStopped}
            //   isPaused={this.state.isPaused}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*============ CUSTOM SOFTWARE BLOCK ===============*/}
          <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money!
              </Typography>
              <Typography variant="subtitle1">
                Complete digitial solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration!</span>
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt="image" src={customSoftwareIcon} />
            </Grid>
          </Grid>     
        </Grid>
        <Grid item>
          {" "}
          {/*============ MOBILE APP BLOCK ===============*/}
          <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer}>
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined}}>
              <Typography variant="h4">Mobile App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone{matchesSM ? null : <br/>} with either platform.
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{marginRight: matchesSM ? 0 : "5em",}}>
              <img className={classes.icon} alt="image" src={mobileAppsIcon} />
            </Grid>
          </Grid>     
        </Grid>
        <Grid item>
          {" "}
          {/*============ WEBSITE BLOCK ===============*/}
          <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
              <Typography variant="h4">Custom Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach more. Discover more. Sell more.
              </Typography>
              <Typography variant="subtitle1">
                Optimize for Search Engines, built for speed.
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt="image" src={websitesIcon} />
            </Grid>
          </Grid>     
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
