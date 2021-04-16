import React, { useReducer, useState } from "react";
import {
  CssBaseline,
  Typography,
  Container,
  Box,
  Grid,
  makeStyles,
  Button,
  Collapse,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CategoryForm = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      description: "",
      image: "",
    }
  );
  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let user = JSON.parse(sessionStorage.getItem("jwtToken"));
    let token = user.token;

    axios
      .post(
        "http://127.0.0.1:8080/category",
        {
          name: formInput.name,
          description: formInput.description,
          image: formInput.image,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setMsg(" Added successfully");
        setOpen(true);
        setSuccess(true);
      })
      .catch((e) => {
        setMsg(e.response.data.error);
        setOpen(true);
        setSuccess(false);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Collapse in={open}>
        {success ? (
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {msg}
          </Alert>
        ) : (
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {msg}
          </Alert>
        )}
      </Collapse>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Category
        </Typography>
        <ValidatorForm onSubmit={submitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                value={formInput.title}
                fullWidth
                required
                label="Category title"
                name="name"
                onChange={handleInput}
              />
            </Grid>

            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                value={formInput.description}
                fullWidth
                required
                label="Category description"
                name="description"
                onChange={handleInput}
              />
            </Grid>

            <Grid item xs={12}>
              <input type="file" name="image" required />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Add Category
          </Button>
        </ValidatorForm>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
};

export default CategoryForm;
