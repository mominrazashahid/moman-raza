import React, { useState } from "react";
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
import Container from "@material-ui/core/Container";
import { useStyles } from "./style.js";
import port1 from "../../assets/images/port1.jpg";

function Home(props) {
  const classes = useStyles(props);
  const medium = useMediaQuery("(min-width:600px)");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
                height="200"
                image={port1}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
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
                height="200"
                image={port1}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
export default withRouter(Home);
