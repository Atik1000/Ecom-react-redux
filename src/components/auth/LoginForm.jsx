import React from "react";
import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  Box,
  Grid,
  makeStyles,
  Button,
  TextField,
  Card,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// import { MDBContainer, MDBRow, MDBCol,  MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const LogIn = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Card
        style={{
          boxShadow:
            "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
          paddingLeft: "60px",
          paddingRight: "60px",
          marginTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid item xs={10}>
              <h6>
                <strong>or</strong> login with :
              </h6>
            </Grid>
            {/* <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                 <i className='fa fa-google'></i>
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                 <i className='fa fa-facebook'></i>
                </MDBBtn>
               
              </div> */}

            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/signup">Don't have an account? Sign up</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Card>
    </Container>
  );
};

export default LogIn;
