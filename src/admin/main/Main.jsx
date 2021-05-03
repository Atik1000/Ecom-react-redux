import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card className={classes.root} variant="outlined" style={{background:"red",borderRadius:"10px"}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{color:"white",fontWeight:"bold"}}
              >
                Category
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root} variant="outlined"  style={{background:"blue",borderRadius:"10px"}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{color:"white",fontWeight:"bold"}}
              >
                Product
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root} variant="outlined"  style={{background:"orange",borderRadius:"10px"}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{color:"white",fontWeight:"bold"}}
              >
                User
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root} variant="outlined"  style={{background:"purple",borderRadius:"10px"}}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{color:"white",fontWeight:"bold"}}
              >
                Order
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
