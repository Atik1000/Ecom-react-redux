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

} from "@material-ui/core";
import {Link} from 'react-router-dom'
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
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signup" >
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>

      </Box>
    </Container>

  );
};

export default LogIn;
