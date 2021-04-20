import React, { useEffect, useState } from "react";
import { Toolbar, Container, Grid, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Navigation = () => {
  const { count } = useSelector((state) => state.cartStore);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const history = useHistory();
  const routePage = (url) => {
    history.push(url);
  };
  const [login, setLogin] = useState();
  useEffect(() => {
    let userInfo = JSON.parse(sessionStorage.getItem("jwtToken"));
    if (userInfo) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  const logOut = () => {
    sessionStorage.removeItem("jwtToken");
    setLogin(false);
  };
  return (
    <>
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <Grid item>
              <MenuItem onClick={() => routePage("/")}>
                {" "}
                <svg
                  class="fill-current text-gray-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"></path>
                </svg>{" "}
                Bunon-world
              </MenuItem>
            </Grid>

            <input
              type="text"
              placeholder="serch product"
              style={{ width: "300px", borderRadius: "10px" }}
            />
          </Grid>

          <Grid container justify="flex-end">
            <Grid item>
              <MenuItem onClick={() => routePage("/cart")}>
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"></path>
                  <circle cx="10.5" cy="18.5" r="1.5"></circle>
                  <circle cx="17.5" cy="18.5" r="1.5"></circle>
                </svg>

                <span style={{ color: "black" }}>{count}</span>
              </MenuItem>
            </Grid>
            <Grid item>
              {login ? (
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>
                    <AccountCircleIcon />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Ordered Item</DropdownItem>
                    <DropdownItem>Member Ship Package</DropdownItem>
                    <DropdownItem onClick={logOut}> Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <MenuItem onClick={() => routePage("/login")}> Log In</MenuItem>
              )}
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/admin")}>admin</MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </>
  );
};

export default Navigation;

