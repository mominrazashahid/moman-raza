import React, { useState, useEffect } from "react";
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
import { useStyles } from "./style.js";
import jam from "../../assets/images/jam.PNG";
import Bodega from "../../assets/images/Bodega.png";
import Sundry from "../../assets/images/sundry.PNG";
import legal from "../../assets/images/pre-ligal.PNG";
import mobDevelopment from "../../assets/images/mobile.jpg";
import design from "../../assets/images/design.jpg";
import webDevelopment from "../../assets/images/web.jpg";
import bg from "../../assets/images/bg.jpg";

import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import InstagramEmbed from "react-instagram-embed";

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
      <Grid
        container
        className={medium == true ? classes.hero : classes.hero_sml}
      >
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
          className={medium == true ? classes.lottie : classes.lottie}
        >
          <Lottie
            options={defaultOptions}
            height={medium == true ? 400 : 200}
            width={medium == true ? 400 : 300}
          />
        </Grid>
      </Grid>
      <div
        className={medium == true ? classes.container : classes.container_sml}
      >
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Typography variant={medium == true ? "h2" : "h3"} align="center">
              My portfolio
            </Typography>
          </Grid>
          <Grid item spacing={3} md={6} xs={12}>
            <Card className={classes.port_card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  style={{ height: "100%", maxHeight: "300px" }}
                  image={Bodega}
                  title="Contemplative Reptile"
                />
                <CardContent style={{ minHeight: 100, height: 130 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bodega
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    component="p"
                  >
                    Bodega is mobile showcase website design by creative
                    website.
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
          <Grid item md={6} xs={12}>
            <Card className={classes.port_card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={jam}
                  style={{ height: "100%", maxHeight: "300px" }}
                  title="Contemplative Reptile"
                />
                <CardContent style={{ minHeight: 100, height: 130 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jamelati
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    component="p"
                  >
                    Jamelati is website design for showcase of cosmatic
                    services.
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
          <Grid item md={6} xs={12}>
            <Card className={classes.port_card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  style={{ height: "100%", maxHeight: "300px" }}
                  image={Sundry}
                  title="Contemplative Reptile"
                />
                <CardContent style={{ minHeight: 100, height: 130 }}>
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
          <Grid item md={6} xs={12}>
            <Card className={classes.port_card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={legal}
                  style={{ height: "100%", maxHeight: "300px" }}
                  title="Contemplative Reptile"
                />
                <CardContent style={{ minHeight: 100, height: 130 }}>
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

          <Grid item md={12}>
            <Typography
              variant={medium == true ? "h2" : "h3"}
              align="center"
              style={{ textAlign: "center" }}
            >
              My Services
            </Typography>
          </Grid>

          <Grid item sm={12} md={4} xl={4}>
            <Card className={classes.card_root}>
              <CardHeader
                style={{ textAlign: "center" }}
                title="Web Development"
              />
              <div style={{ width: "100%", height: "400px" }}>
                <CardMedia
                  className={classes.media}
                  image={webDevelopment}
                  title="Paella dish"
                />
              </div>
              <CardContent>
                <div className={classes.list}>
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="MERN Development" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Web Designing" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Wordpress" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Wix" />
                    </ListItem>
                  </List>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={4} xl={4}>
            <Card className={classes.card_root}>
              <CardHeader
                style={{ textAlign: "center" }}
                title="Graphic Designing"
              />
              <div style={{ width: "100%", height: "400px" }}>
                <CardMedia
                  className={classes.media}
                  image={design}
                  title="Paella dish"
                />
              </div>
              <CardContent>
                <div className={classes.list}>
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="MERN Development" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Web Designing" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Wordpress" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Wix" />
                    </ListItem>
                  </List>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={4} xl={4}>
            <Card className={classes.card_root}>
              <CardHeader
                style={{ textAlign: "center" }}
                title="Mobile Development"
              />
              <div style={{ width: "100%", height: "400px" }}>
                <CardMedia
                  className={classes.media}
                  image={mobDevelopment}
                  title="Paella dish"
                />
              </div>
              <CardContent>
                <div className={classes.list}>
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="MERN Development" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Web Designing" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Wordpress" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Wix" />
                    </ListItem>
                  </List>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant={medium == true ? "h2" : "h3"}
              align="center"
              style={{ textAlign: "center" }}
            >
              Instagram posts
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Card className={classes.card_root}>
              <InstagramEmbed
                url="https://www.instagram.com/p/CMpOJAuDtl5/"
                clientAccessToken="2828354614045888|a74ae2af05db8f70828da3268e4249e5"
                maxWidth={400}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Card className={classes.card_root}>
              <InstagramEmbed
                url="https://www.instagram.com/p/CMc07hzj1PY/"
                clientAccessToken="2828354614045888|a74ae2af05db8f70828da3268e4249e5"
                maxWidth={400}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Card className={classes.card_root}>
              <InstagramEmbed
                url="https://www.instagram.com/p/CC-xKrSjlMd/"
                clientAccessToken="2828354614045888|a74ae2af05db8f70828da3268e4249e5"
                maxWidth={400}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default withRouter(Home);
