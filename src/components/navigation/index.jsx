// import React, { useEffect, useState } from "react";
// import { Toolbar, Container, Grid, MenuItem,Menu } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {storeAllCategory} from '../../store/action/categoryAction';
// import {addSessionData} from '../../store/action/sessionAction';
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// const Navigation = () => {
//   let dispatch=useDispatch()
//   const { count } = useSelector((state) => state.cartStore);
//   const session=useSelector((state)=>state.sessionStore)
//   const categories=useSelector((state)=>state.categoryStore)

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggle = () => setDropdownOpen((prevState) => !prevState);

//   useEffect(()=>{
//     dispatch(storeAllCategory())
//   },[])

//   const history = useHistory();
//   const routePage = (url) => {
//     history.push(url);
//   };
//   const [login, setLogin] = useState();
//   useEffect(() => {
//     let userInfo = JSON.parse(sessionStorage.getItem("jwtToken"));
//     if (userInfo) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   }, []);
//   let closeMenu=()=>{
//     setMenuOpen(false);
//   }
//   let routePage2 = (url) => {
//     history.push(url)
//     setMenuOpen(false);
// }
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState()

//   const recordButtonPosition = (event) => {
//       setAnchorEl(event.currentTarget);
//       setMenuOpen(true);
//   }
//   const logOut=()=>{
//     sessionStorage.removeItem('jwtToken')
//     dispatch(addSessionData({token:'',role:'',expire_at:''}))

//   }
//   return (
//     <>
//       <Container>
//         <Toolbar>
//           <Grid container justify="flex-start">
//             <Grid item>
//               <MenuItem onClick={() => routePage("/")}>
//                 {" "}
//                 <svg
//                   class="fill-current text-gray-800 mr-2"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"></path>
//                 </svg>{" "}
//                 Bunon-world
//               </MenuItem>
//             </Grid>

//             <input
//               type="text"
//               placeholder="serch product"
//               style={{ width: "300px", borderRadius: "10px" }}
//             />
//           </Grid>
//           <Grid item>
//                 <>
//                   <MenuItem onClick={recordButtonPosition}>

//                   </MenuItem>
//                   <Menu
//                       anchorEl={anchorEl}
//                       open={menuOpen}
//                       onClose={closeMenu} >
//                       {categories.category_list.length>0 && categories.category_list.map((category,index)=>{
//                         return <MenuItem onClick={()=>routePage2(`/products/category/${category._id}`)} key={index}> {category.name} </MenuItem>
//                       })}

//                   </Menu>

//               </>
//             </Grid>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <MenuItem onClick={() => routePage("/cart")}>
//                 <svg
//                   class="fill-current hover:text-black"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"></path>
//                   <circle cx="10.5" cy="18.5" r="1.5"></circle>
//                   <circle cx="17.5" cy="18.5" r="1.5"></circle>
//                 </svg>

//                 <span style={{ color: "black" }}>{count}</span>
//               </MenuItem>
//             </Grid>

//             <Grid>
//           {  session.token && session.expire_at>new Date().valueOf()?<MenuItem onClick={logOut}> Logout</MenuItem>:<MenuItem onClick={() => routePage("/login")}> Log In</MenuItem>}
//             </Grid>

//              <Grid item>
//              {session.role=="admin" && session.expire_at>new Date().valueOf() &&<MenuItem onClick={() => routePage("/admin")}> Dashboard</MenuItem>}
//             </Grid>*

//              {/* <Grid item>
//               <MenuItem onClick={() => routePage("/admin")}>admin</MenuItem>
//             </Grid>  */}
//           </Grid>
//         </Toolbar>
//       </Container>
//     </>
//   );
// };

// export default Navigation;

import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavItem, Container, NavbarText } from "reactstrap";
import { Toolbar, Grid, MenuItem, Menu } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Logo from "../../assets/anafiya_logo.webp";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeAllCategory } from "../../store/action/categoryAction";
import { addSessionData } from "../../store/action/sessionAction";

const Navigation = (props) => {
  let dispatch = useDispatch();
  const { count } = useSelector((state) => state.cartStore);
  const session = useSelector((state) => state.sessionStore);
  const categories = useSelector((state) => state.categoryStore);

  useEffect(() => {
    dispatch(storeAllCategory());
  }, []);

  const history = useHistory();
  const routePage = (url) => {
    history.push(url);
  };
  // const [login, setLogin] = useState();
  // useEffect(() => {
  //   let userInfo = JSON.parse(sessionStorage.getItem("jwtToken"));
  //   if (userInfo) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // }, []);
  let closeMenu = () => {
    setMenuOpen(false);
  };
  let RoutePage = (url) => {
    history.push(url);
    setMenuOpen(false);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  const logOut = () => {
    sessionStorage.removeItem("jwtToken");
    dispatch(addSessionData({ token: "", role: "", expire_at: "" }));
  };
  return (
    <Container>
      <Navbar
        style={{ borderBottom: "1px solid lightgrey" }}
        color="light"
        light
        expand="md"
      >
        <Link to="/">
          <img style={{ width: "7rem" }} src={Logo} alt="" />
        </Link>

        <>
          <Menu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
            {categories.category_list.length > 0 &&
              categories.category_list.map((category, index) => {
                return (
                  <MenuItem
                    onClick={() =>
                      RoutePage(`/products/category/${category._id}`)
                    }
                    key={index}
                  >
                    {category.name}
                  </MenuItem>
                );
              })}
          </Menu>
        </>
        <Nav className="mr-auto" navbar>
          <NavItem item>
            {session.role == "admin" &&
              session.expire_at > new Date().valueOf() && (
                <MenuItem onClick={() => routePage("/admin")}>
                  Admin Dashbord
                </MenuItem>
              )}
          </NavItem>
        </Nav>
        <NavbarText>
          <i className="fa fa-search"></i>
          <input
            className="border-none focus:ring-gray-200 transition-shadow duration-500 rounded-md bg-gray-100 px-5 pl-12 w-64 overflow-hidden"
            style={{
              marginRight: "20px",
              transitionDuration: ".5s",
              width: "16rem",
              height: "40px",
              borderStyle: "none",
              borderRadius: ".375rem",
              background: "rgba(243,244,246)",
            }}
            type="text"
            placeholder="Search here..."
            autocomplete="off"
          />
        </NavbarText>
        <NavbarText onClick={() => routePage("/cart")}>
          <svg
            style={{ marginRight: "20px" }}
            class="fill-current hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 24 24"
          >
            <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"></path>
            <circle cx="10.5" cy="18.5" r="1.5"></circle>
            <circle cx="17.5" cy="18.5" r="1.5"></circle>
          </svg>

          <span style={{ color: "black", marginRight: "5px" }}>{count}</span>
        </NavbarText>
        <>
          <>
            {session.token && session.expire_at > new Date().valueOf() ? (
              <NavbarText >
                <Button onClick={logOut} variant="contained" color="secondary">
                  SIGN OUT
                </Button>
              </NavbarText>
            ) : (
              <>
                <NavbarText>
                  <Button
                    variant="contained"
                    style={{
                      border: "1px solid blue",
                      marginRight: "20px",
                      height: "38px",
                    }}
                    color="default"
                    onClick={() => routePage("/login")}
                  >
                    SIGN IN
                  </Button>
                </NavbarText>
                <NavbarText>
                  <Button
                    onClick={() => routePage("/signup")}
                    variant="contained"
                    color="primary"
                  >
                    SIGN UP
                  </Button>
                </NavbarText>
              </>
            )}
          </>
        </>
     
      </Navbar>
    </Container>
  );
};

export default Navigation;
