import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
// import Carusel from "../Carusel";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeAllProduct } from "../../store/action/productAction";
import axios from "axios";
import Loading from "../../components/loader";
import { BASE_URL } from "../../static";
import Alert from "@material-ui/lab/Alert";
import Slider from "../Slider";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  media: {
    height: 300,
    width: "100%",
  },
});

const Product = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productStore);
  const { loading } = useSelector((state) => state.loaderStore);
  const { count } = useSelector((state) => state.cartStore);
  const { selectedProduct } = useSelector((state) => state.productStore);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    dispatch(storeAllProduct());
  }, []);

  const handleClick = (id) => {
    history.push(`/product_detail/${id}`);
  };
  const addToCart = () => {
    let user = JSON.parse(sessionStorage.getItem("jwtToken"));
    if (!user) {
      history.push("/login");
    } else {
      let token = user.token;
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          count: count ? count + 1 : 1,
          productList: productList
            ? productList.concat(selectedProduct)
            : [...selectedProduct],
        },
      });
      axios
        .post(
          `${BASE_URL}/cart`,
          {
            product: {
              id: selectedProduct._id,
              quantity: 1,
            },
          },
          {
            headers: {
              authorization: `bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setMsg("Added to cart.");
          setOpen(true);
        })
        .catch((e) => {
          setMsg(e.response.data.error);
          setOpen(true);
        });
    }
  };
  return (
    <>
      {loading === true ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Container>
          <Slider/>
          {/* <Slide/> */}
          <Collapse in={open}>
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
          </Collapse>
          <Grid container spacing={5} style={{ marginTop: "10px" }}>
            {productList &&
              productList.map((product, index) => {
                return (
                  <Grid item md={4} sm={6} key={index}>
                    <div class="flex">
                      <div
                        class="flex-grow h-16"
                        style={{
                          boxShadow:
                            "0 2px 5px 0 rgb(0 0 0 / 50%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
                          cursor: "pointer",
                          
                         borderStyle:"outset"
                        }}
                      >
                        <div class="p-8">
                          <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <CardMedia
                              className={classes.media}
                              image={BASE_URL + product.image}
                              title="Contemplative Reptile"
                              onClick={() => handleClick(product._id)}
                            />
                            <div class="px-6 py-4">
                              <div
                                class="font-bold ml-32 text-xl text-center mb-2"
                                style={{ color: "blue" }}
                                onClick={() => handleClick(product._id)}
                              >
           
                                {product.title}
                              </div>
                              <p class="text-gray-700 text-base">
                                {product.description}
                              </p>
                            </div>
                            <div class="px-6 pt-4 pb-2 mr-2">
                              <span style={{color:"rebeccapurple"}} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">
                                ${product.price}
                              </span>
                              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  text-right text-gray-700 mr-2 mb-2">
                                <Link style={{textDecoration:"none",color:"purple",marginLeft:"50%"}} onClick={addToCart}>
                               
                                  <svg
                                    class="fill-current hover:text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"></path>
                                    <circle
                                      cx="10.5"
                                      cy="18.5"
                                      r="1.5"
                                    ></circle>
                                    <circle
                                      cx="17.5"
                                      cy="18.5"
                                      r="1.5"
                                    ></circle>
                                  </svg>
                                  Add  
                              
                                  
                                </Link>
                                
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <Card className={classes.root}>
                      <CardActionArea onClick={() => handleClick(product._id)}>
                        <CardMedia
                          className={classes.media}
                          image={BASE_URL + product.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h6"
                            style={{ fontSize: "16px" }}
                          >
                            {product.title}
                          </Typography>
                          <br />
                          <Typography variant="subtitle1" color="primary">
                            Price: ${product.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card> */}
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Product;
