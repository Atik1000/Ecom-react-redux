
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AppleIcon from '@material-ui/icons/Apple';
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from "@material-ui/icons/Mail";
import CategoryIcon from "@material-ui/icons/Category";
import { Link, useHistory } from "react-router-dom";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideBar() {
  const classes = useStyles();

  const history = useHistory();
  const routePage = (url) => {
    history.push(url);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Welcome Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <FormControl className={classes.formControl}>
              <Select
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem onClick={() => routePage("/add-category")}>
                  Add category
                </MenuItem>
                <MenuItem onClick={() => routePage("/update-category")}>
                  Update Category
                </MenuItem>
                <MenuItem onClick={() => routePage("/delete-category")}>
                  Delete Category
                </MenuItem>
                <MenuItem>Category</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AppleIcon />
            </ListItemIcon>
            <FormControl className={classes.formControl}>
              <Select
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem onClick={() => routePage("/add-product")}>
                  <Link to="/add-product">create product</Link>
                </MenuItem>
                <MenuItem onClick={() => routePage("/update-product")}>
                  Update Product
                </MenuItem>
                <MenuItem onClick={() => routePage("/delete-product")}>
                  Delete Product
                </MenuItem>
                <MenuItem>Product</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AppleIcon />
            </ListItemIcon>
            <FormControl className={classes.formControl}>
              <Select
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem onClick={() => routePage("")}>
                  Total Order
                  {/* <Link to="/add-product">create product</Link> */}
                </MenuItem>
                <MenuItem onClick={() => routePage("")}>
                  {/* Update Product */}
                </MenuItem>
                <MenuItem onClick={() => routePage("")}>
                  {/* Delete Product */}
                </MenuItem>
                <MenuItem>Order</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <FormControl className={classes.formControl}>
              <Select
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem onClick={() => routePage("/add-user")}>
                  <Link to="/add-product">create user</Link>
                </MenuItem>
                <MenuItem onClick={() => routePage("/update-user")}>
                  Update user
                </MenuItem>
                <MenuItem onClick={() => routePage("/delete-user")}>
                  Delete user
                </MenuItem>
                <MenuItem>User</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
