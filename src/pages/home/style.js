import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // image slide our services

  root: {
    Width: "100%",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    minheight: 400,
    maxHeight: 400,
    height: "100%",
    display: "block",
    width: "100%",
    overflow: "fit",
  },

  port: {
    paddingLeft: 0,
  },
  insta_port: {
    padding: 0,
    marginLeft: 0,
  },
  port_card: {
    maxWidth: 600,
    minWidth: 400,
    maxheight: 600,
  },

  //==========================Services Card ================================//
  card_root: {
    maxWidth: 400,
    minWidth: 400,
    height: 700,
  },
  media: {
    height: "100%",
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: "red",
  },
  list: {
    width: "100%",
    maxWidth: 360,

    backgroundColor: theme.palette.background.paper,
  },

  ///-----------------------------Large Screen ----------------------------//
  hero: {
    backgroundImage: "linear-gradient(to left, #011327  0% , #499eff )",
    color: "white",
    minHeight: 500,
  },
  container: {
    backgroundColor: "#011327",
    color: "white",
    minHeight: "600px",
    padding: 70,
  },
  lottie: {
    marginTop: 10,
  },
  textBack: {
    width: "80%",
    marginTop: 10,
    height: "auto",
  },
  name: {
    "letter-spacing": "2px",
    textAlign: "center",
    textDecoration: "underline",
    fontSize: 60,
  },
  textBackSlogan: {
    width: "80%",
    marginTop: 10,
    marginLeft: "5%",
    height: 30,
  },
  slogan: {
    " letter-spacing": "2px",
    textAlign: "justify",
    fontWeight: 20,
    fontSize: 18,
  },

  ///-----------------------------Small Screen ----------------------------//
  hero_sml: {
    backgroundImage: "linear-gradient(to left, #011327  0% , #499eff )",
    color: "white",
    minHeight: 650,
  },
  container_sml: {
    backgroundColor: "#011327",
    color: "white",
    minHeight: "600px",
    padding: 20,
  },
  textBacksml: {
    width: "100%",
    marginTop: 0,
    height: 15,
  },

  name_sml: {
    " letter-spacing": "2px",
    textAlign: "center",
    textDecoration: "underline",
    fontSize: 25,
  },

  textBackSlogansml: {
    width: "100%",
    marginTop: 50,
    height: "auto",
    padding: 8,
  },

  slogan_sml: {
    " letter-spacing": "2px",
    textAlign: "justify",
    fontWeight: 20,
    fontSize: 18,
  },
  portTextsml: {
    textAlign: "center",
    fontSize: 50,
  },
  // services image
  img_sml: {
    maxHeight: 150,
    height: "100%",
    display: "block",
    width: "100%",
    overflow: "hidden",
  },
}));

export { useStyles };
