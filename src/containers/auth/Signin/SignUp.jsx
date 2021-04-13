import React, { useReducer} from "react";
import {BASE_URL} from "../../../static";
import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  makeStyles,
  Button,
  Card,
  Grid,
} from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      user_name: "",
      email: "",
      password: "",
      city: "",
      street: "",
      number: "",
      zipcode: "",
      phone: "",
    }
  );
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/signin`, {
        email: formInput.email,
        username: formInput.user_name,
        password: formInput.password,
        firstname: formInput.firstName,
        lastname: formInput.lastName,
        phone: formInput.phone,
        address: {
          city: formInput.city,
          street: formInput.street,
          number: formInput.number,
          zipcode: formInput.zipcode,
        },
      })
      .then((res) => {
        history.push("/login");
      })
      .catch((e)=>{
        console.log(e.response.data);
  
      });
  };
  console.log(formInput);
  const handleInput = (e) => {
    const name = e.target.name;
    const newValue = e.target.value;
    setFormInput({ [name]: newValue });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Card
        style={{
          width: "500px",
          boxShadow:
            "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
          paddingLeft: "50px",
          paddingRight: "50px",
          marginTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <CssBaseline />
    
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <ValidatorForm onSubmit={submitForm}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  id="user_name"
                  label="User Name"
                  name="user_name"
                  autoComplete="user_name"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  value={formInput.email}
                  fullWidth
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleInput}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInput}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextValidator
                  autoComplete="city"
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoFocus
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  autoComplete="street"
                  onChange={handleInput}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextValidator
                  autoComplete="number"
                  name="number"
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="number"
                  label="Number"
                  autoFocus
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  variant="outlined"
                  fullWidth
                  id="zipcode"
                  label="Zip Code"
                  name="zipcode"
                  type="number"
                  autoComplete="zipcode"
                  onChange={handleInput}
                />
              </Grid>

              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  type="number"
                  autoComplete="Phone"
                  onChange={handleInput}
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
              CREATE AN ACCOUNT
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <RouteLink to="/login">
                  Already have an account? Sign in
                </RouteLink>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Card>
    </Container>
  );
};

export default SignUp;