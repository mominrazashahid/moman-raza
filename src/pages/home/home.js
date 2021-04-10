import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Lottie from "react-lottie";
import animationData from "./lottie/developer.json";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useStyles } from "./style.js";
import jam from "../../assets/images/jam.PNG";
import Bodega from "../../assets/images/Bodega.png";
import Sundry from "../../assets/images/sundry.PNG";
import legal from "../../assets/images/pre-ligal.PNG";
import mobDevelopment from "../../assets/images/mobile-development.jpg";
import testing from "../../assets/images/testing.jpg";
import wordpress from "../../assets/images/wordpress.jpg";
import webDevelopment from "../../assets/images/web-development.jpg";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Website Development",
    imgPath: webDevelopment,
  },
  {
    label: "Software Testing",
    imgPath: testing,
  },
  {
    label: "Wordpress theme customization",
    imgPath: wordpress,
  },
  {
    label: "Mobile App  Development",
    imgPath: mobDevelopment,
  },
];
function Home(props) {
  const classes = useStyles(props);
  const medium = useMediaQuery("(min-width:600px)");
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
      <Grid container spacing={3} className={classes.lineHero}>
        <Grid item xl={7} md={6} xs={12}>
          <div
            className={medium == true ? classes.textBack : classes.textBacksml}
          >
            <h1 className={medium == true ? classes.name : classes.name_sml}>
              I'm Moman Raza
            </h1>
          </div>

          <div
            className={
              medium == true
                ? classes.textBackSlogan
                : classes.textBackSlogansml
            }
          >
            <Typography
              variant="subtitle2"
              className={medium == true ? classes.slogan : classes.slogan_sml}
            >
              A passionate Full Stack Software Developer 🚀 having an experience
              of building Web Applications with JavaScript / Reactjs / Nodejs
              using mongoDB or mySQL database. I have team of professional
              developer, we provide Web Development, Mobile Development, Content
              Writing and Graphic Designing services to our respected clients.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xl={5}
          md={6}
          xs={12}
          style={medium == true ? { marginTop: 70 } : null}
        >
          <Lottie
            options={defaultOptions}
            height={medium == true ? 400 : 200}
            width={medium == true ? 400 : 300}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} maxWidth="sm" className={classes.port}>
        <Grid item md={12}>
          <Typography variant={medium == true ? "h2" : "h3"} align="center">
            My portfolio
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                style={{ height: "100%", maxHeight: "300px" }}
                image={Bodega}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Bodega
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Bodega is mobile showcase website design by creative website.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={jam}
                style={{ height: "100%", maxHeight: "300px" }}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jamelati
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Jamelati is website design for showcase of cosmatic services
                  provided by the Jamelati.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                style={{ height: "100%", maxHeight: "300px" }}
                image={Sundry}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Sundry
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Sundry is e-commerce website for selling gifts and candles
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={legal}
                style={{ height: "100%", maxHeight: "300px" }}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Pre Legal
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Pre Legal is a group of Leading Paralegal Professionals
                  provides pre-legal solutions.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} maxWidth="sm" className={classes.port}>
        <div className={classes.root}>
          <Paper square elevation={0} className={classes.header}>
            <Typography variant={medium == true ? "h4" : "h6"}>
              {tutorialSteps[activeStep].label}
            </Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      </Grid>
    </>
  );
}
export default withRouter(Home);
