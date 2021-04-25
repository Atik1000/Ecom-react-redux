import React, { useEffect } from "react";
import { Container, Grid, CardMedia, Card, CardActionArea, CardContent,Typography } from "@material-ui/core";


import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeAllProduct } from "../../store/action/productAction";

import Loading from "../../components/loader";
import { BASE_URL } from "../../static";
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
          <Slider />

          <Grid container spacing={5} style={{ marginTop: "10px" }}>
            {productList &&
              productList.map((product, index) => {
                return (
                  <Grid item md={4} sm={6} key={index}>
          
                    <Card className={classes.root}>
                      <CardActionArea onClick={()=>handleClick(product._id)}>
                        <CardMedia
                          className={classes.media}
                          image={BASE_URL+product.image}
                    
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" style={{fontSize:'16px'}} >
                            {product.title}
                          </Typography>
                          <br />
                          <Typography variant="subtitle1" color="primary">
                             Price: ${product.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
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
