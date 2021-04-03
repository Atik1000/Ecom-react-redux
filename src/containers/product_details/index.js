import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { storeSingleProduct } from "../../store/action/productAction";
const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const ProductDetail = () => {
  const { count, productList } = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productStore);
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const routePage = (url) => {
    history.push(url);
  };
  const [loading, setLoading] = useState(true);
  let { id } = params;
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`http://54.162.199.74/products/${id}`);

        dispatch(storeSingleProduct(data));
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        count: count ? count + 1 : 1,
        productList: productList
          ? productList.concat(selectedProduct)
          : [...selectedProduct],
      },
    });
  };
  return (
    <Container>
      <Button onClick={() => routePage("/")}>Go back</Button>
      {loading && (
        <CircularProgress style={{ marginLeft: "50%", marginTop: "30%" }} />
      )}
      {selectedProduct.hasOwnProperty("title") && (
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt={selectedProduct.title}
            height="400"
            image={selectedProduct.image}
            title={selectedProduct.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {selectedProduct.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {selectedProduct.description}
              {selectedProduct.category}
              <br />
            </Typography>
            <Typography variant="h6" color="primary" component="p">
              price: ${selectedProduct.price}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={addToCart}
            >
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      )}
    </Container>
  );
};

export default ProductDetail;
