import React from "react";
import { Toolbar, Container, Grid, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { count } = useSelector((state) => state.cartStore);
  const history = useHistory();
  const routePage = (url) => {
    history.push(url);
  };
  return (
    <>
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <Grid item>
              <MenuItem onClick={() => routePage("/")}> FakeEcom</MenuItem>
            </Grid>

            <Grid item></Grid>
            <input
              type="text"
              placeholder="serch product"
              style={{ width: "300px",borderRadius:'10px' }}
            />
          </Grid>

          <Grid container justify="flex-end">
            <Grid item>
              <MenuItem onClick={() => routePage("/cart")}>
                <img
                  style={{ height: "30px", width: "30px" }}
                  src="https://image.flaticon.com/icons/png/512/126/126083.png"
                  alt=""
                />
                <span style={{ color: "black" }}>{count}</span>
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/Signin")}>Sign in</MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </>
  );
};

export default Navigation;
