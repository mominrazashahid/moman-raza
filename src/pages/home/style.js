import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  lineHero: {
    backgroundColor: "#011327",
    color: "white",
    minHeight: "600px",
  },
  portText: {
    textAlign: "center",
    margin: 20,
    paddingTop: 30,
  },
  port: {
    padding: 30,
  },
  portCard: {
    transition: "transform 0.15s ease-in-out",
    transform: "scale3d(1.05, 1.05, 1)",
  },

  ///-----------------------------Large Screen ----------------------------//
  textBack: {
    width: "80%",
    marginLeft: "50px",
    marginTop: 130,
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
    marginTop: 50,
    marginLeft: "20%",
    height: 30,
  },
  slogan: {
    " letter-spacing": "2px",
    textAlign: "justify",
    fontWeight: 20,
    fontSize: 18,
  },

  ///-----------------------------Small Screen ----------------------------//

  textBacksml: {
    width: "100%",
    marginTop: 100,
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
}));

export { useStyles };