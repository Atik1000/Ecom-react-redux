import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import Carusel from "../Carusel";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeAllProduct } from "../../store/action/productAction";
import Loading from "../../components/loader";
import { BASE_URL } from "../../static";
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
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    dispatch(storeAllProduct());
  }, []);

  const handleClick = (id) => {
    history.push(`/product_detail/${id}`);
  };

  return (
    <>
      {loading === true ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Container>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            {productList &&
              productList.map((product, index) => {
                return (
                  <Grid
                    item
                    md={4}
                    sm={6}
                    key={index}
                 
                  >
                    <div class="flex">
                      <div
                        class="flex-grow h-16"
                        style={{
                          boxShadow:
                            "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
                       
                        }}
                      >
                        <div
                          class="p-8"
                          onClick={() => handleClick(product._id)}
                        >
                          <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <CardMedia
                              className={classes.media}
                              image={BASE_URL + product.image}
                              title="Contemplative Reptile"
                            />
                            <div class="px-6 py-4">
                              <div class="font-bold text-xl mb-2">Mountain</div>
                              <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                              </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Price: ${product.price}
                              </span>
                              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #travel
                              </span>
                              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #winter
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
