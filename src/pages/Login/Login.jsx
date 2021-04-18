import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { useSnackbar } from "notistack";
import { color_palette } from "../../theme/theme";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: 50
  },
  forgetPassword: {
    color: color_palette.primary,
    cursor: "Pointer"
  }
}));

export default function SignIn(props) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [errMessage, setErrMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  //state
  const [inputs, setinputs] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setinputs({ ...inputs, [e.target.id]: e.target.value });
  };
  const handleForgotPassword = () => {
    props.history.push("/change-password");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // setIsLoading(true);
    const data = {
      email: inputs.email,
      password: inputs.password,
      device_token: "admin_token",
      device_platform: "web",
      time_zone: "karachi",
      type: 1
    };
    // const response = await AdminLogin(data);
    // console.log(response, "response");
    // if (response.code !== 200) {
    //   enqueueSnackbar(response.message, { variant: "error" });
    // } else {
    //   localStorage.setItem("token", response.admin.token);
    //   props.history.push("/dashboard");
    // }
    props.history.push("/dashboard");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {errMessage && (
            <Alert variant="filled" severity="error">
              {errMessage}
            </Alert>
          )}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            value={inputs.email}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Typography
          variant="subtitle1"
          className={classes.forgetPassword}
          gutterBottom
          onClick={handleForgotPassword}
        >
          Forget Password?
        </Typography>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        MOman Raza
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
