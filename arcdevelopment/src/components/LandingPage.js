import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import animationData from "../animations/landinganimation/data";
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
          backgroundColor: theme.palette.secondary.light
        }
      },
      buttonContainer: {
        marginTop: "1em"
      },
      learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
      },
      learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
          marginBottom: "2em"
        }
      },
      mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
          marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
          marginTop: "2em"
        }
      },
      heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
          marginLeft: 0
        }
      },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidMid Slice",
    },
  };

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
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
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
